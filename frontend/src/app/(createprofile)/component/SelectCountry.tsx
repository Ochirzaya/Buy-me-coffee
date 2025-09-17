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
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

export function SelectCountry() {
  return (
    <Select>
      <Label className="text-[14px] font-medium text-[#09090B]">
        Select country
      </Label>
      <SelectTrigger className="w-[510px] h-10">
        <SelectValue
          className="text-[14px] font-medium text-[#09090B]"
          placeholder="Select"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Country">United States</SelectItem>
        <SelectItem value="Country">Australia</SelectItem>
        <SelectItem value="Country">Mongolia</SelectItem>
        <SelectItem value="Country">New Zealand</SelectItem>
        <SelectItem value="Country">United Kingdom</SelectItem>
      </SelectContent>
    </Select>
  );
}
