import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectInput() {
  return (
    <Select>
      <SelectTrigger className="w-[159px] h-9 ">
        <p className="text-[14px] font-normal text-[#09090B]">Month</p>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          <SelectItem value="January">January</SelectItem>
          <SelectItem value="February">February</SelectItem>
          <SelectItem value="March">March</SelectItem>
          <SelectItem value="April">April</SelectItem>
          <SelectItem value="May">May</SelectItem>
          <SelectItem value="June">June</SelectItem>
          <SelectItem value="Jyly">July</SelectItem>
          <SelectItem value="August">August</SelectItem>
          <SelectItem value="September">September</SelectItem>
          <SelectItem value="October">October</SelectItem>
          <SelectItem value="November">November</SelectItem>
          <SelectItem value="December">December</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
