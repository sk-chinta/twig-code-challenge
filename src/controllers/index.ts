import { groupArrayElements } from "../utilities/groupArrayElements";
import { ITestCases } from "../interfaces/groupArrayElements.interface";
import { IResponse } from "../interfaces/response.interface";

export const runGroupArrayElements = (ctx: any) => {
  try {
    let testCases: ITestCases = ctx.request.body;
    let groupArraEelementsResponse: number[] | number[][] = [];
    const response = [];

    for (let testCase of testCases) {
      groupArraEelementsResponse = groupArrayElements(testCase);
      response.push({ testCase: groupArraEelementsResponse });
    }

    const requestResponse: IResponse = {
      status: 200,
      body: response,
    };
    ctx.body = requestResponse;
  } catch (error) {
    console.log(error);
  }
};
