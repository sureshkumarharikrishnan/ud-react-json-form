import { GenericData } from "../components/controls/types";

export class DataSourceService {
  public static getData(
    dataSrc: string,
    context: any,
    params: any
  ): GenericData[] {
    let result: GenericData[];
    switch (dataSrc) {
      case "days":
        result = days(params);
        break;
      case "months":
        result = months;
        break;
      default:
        result = [];
    }

    return result;
  }
}

const days = (model: any) => {
  const data: GenericData[] = [];
  if (model.month > 0) {
    const days = new Date(2022, model.month, 0).getDate();
    for (let index = 1; index <= days; index++) {
      data.push({ name: index.toString(), id: index });
    }
  }
  return data;
};

const months: GenericData[] = [
  { id: 1, name: "JAN" },
  { id: 2, name: "FEB" },
  { id: 3, name: "MAR" },
  { id: 4, name: "APR" },
  { id: 5, name: "MAY" },
  { id: 6, name: "JUN" },
  { id: 7, name: "JUL" },
  { id: 8, name: "AUG" },
  { id: 9, name: "SEP" },
  { id: 10, name: "OCT" },
  { id: 11, name: "NOV" },
  { id: 12, name: "DEC" },
];
