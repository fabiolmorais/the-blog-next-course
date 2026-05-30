import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";

const ROOT_DIR = process.cwd();

export class JsonPostRepository implements PostRepository {
  private async readFromDisk() {}

  findAll(): Promise<PostModel[]> {
    throw new Error("Method not implemented.");
  }
}

