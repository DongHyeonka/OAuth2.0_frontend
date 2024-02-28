import { ResponseDto } from "apis/response";

export type ResponseBody <T> = T | ResponseDto | null;