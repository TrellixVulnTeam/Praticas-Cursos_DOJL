import { Schema, model } from "mongoose";
import { IUser } from "./Users";

export interface IMyImages {
  name: string;
  link: string;
  user: Schema.Types.ObjectId | IUser;     
}

const imagesUser = new Schema<IMyImages>(
    {
      name: {
        type: Schema.Types.String,
      },
      link: {
        type: Schema.Types.String,
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: "USer",
      }
    },

    { timestamps: true }
  );
  
  export default model<IMyImages>("User", imagesUser);