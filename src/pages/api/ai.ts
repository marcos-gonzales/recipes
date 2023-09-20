// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import { PrismaClient } from "@prisma/client";

type Data = {
  response: any;
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "POST") {
    const openai = new OpenAI({
      apiKey: process.env.OPEN_AI_SECRET,
    });

    const ingredients = req.body[0]
      .filter((ingredient: any) => {
        if (ingredient.checked) {
          return ingredient.name;
        }
      })
      .map((ingredient: any) => {
        return ingredient.name;
      })
      .join(", ");

    const cuisine = req.body[1].name || "";
    const session = req.body[2];

    let completion;

    async function main() {
      console.log("working");
      console.log(ingredients);
      console.log(cuisine);
      completion = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content:
              `write me a a recipe or two using only these ingredients and this ${cuisine} if not empty. you can assume i have oil, butter, salt, and pepper and most basic condiments.nothing else. Can you put the response in html and use an article element with the class of 'message is-dark'. have a div with the class of 'message-header' that has a p tag with the recipe title and then closes.after this have a div with the class 'message-body' that lists the steps in their own p tags. Remember to only use recipes that i have the ingredients for. you can assume i have seasonings and to not add any style class.` +
              ingredients,
          },
        ],
        model: "gpt-3.5-turbo",
      });
      console.log(await completion.choices[0].message.content);
      return await completion.choices[0].message.content;
    }

    const response = await main();
    console.log("response", response);

    await prisma.recipe.create({
      data: {
        ingredients: ingredients,
        data: response,
        createdAt: new Date(),
        cuisine: cuisine,
        userId: session.id,
      },
    });

    const recipe = res.status(200).send({
      response: response,
    });
  }

  if (req.method == "GET") {
    const recipes = await prisma.recipe.findMany();
    res.status(200).send({
      recipes: recipes,
    });
  }
}
