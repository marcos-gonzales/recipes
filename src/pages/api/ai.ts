// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

type Data = {
  response: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_SECRET,
  });

  const ingredients = req.body
    .filter((ingredient: any) => {
      if (ingredient.checked) {
        return ingredient.name;
      }
    })
    .map((ingredient: any) => {
      return ingredient.name;
    })
    .join(", ");

  const cuisine = req.body
    .filter((cuisine: any) => {
      if (cuisine.checked) {
        return cuisine.name;
      }
    })
    .map((cuisine: any) => {
      return cuisine.name;
    })
    .join(", ");

  let completion;

  async function main() {
    console.log("working");
    console.log(ingredients);
    completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content:
            `write me a a recipe or two using only these ingredients. you can assume i have oil, butter, salt, and pepper and most basic condiments.nothing else. Can you put the response in html and use an article element with the class of 'message is-dark'. have a div with the class of 'message-header' that has a p tag with the recipe title and then closes.after this have a div with the class 'message-body' that lists the steps in their own p tags. use the ${cuisine} if any otherwise whatever you think is best` +
            ingredients,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    console.log(
      "inside main() console.log(await completion.choices[0])",
      await completion.choices[0].message.content
    );
    return await completion.choices[0].message.content;
  }

  const response = await main();
  console.log("response", response);
  res.status(200).send({
    response: response,
  });
}
