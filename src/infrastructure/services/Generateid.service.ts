import { v4 } from "uuid";
import { IGenerateIdService } from "../interaces/IGenerateid.service";

export class GenerateIdService implements IGenerateIdService {
    get(): string {
        return v4();
    };
}