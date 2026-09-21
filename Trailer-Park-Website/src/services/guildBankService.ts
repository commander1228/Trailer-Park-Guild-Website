import type { TestItem } from "@/types/testFakeItem";
import { postApi } from "./api";


export function addTestItem(testItem: TestItem) {
    console.log("added item : ", postApi('/api/guild/add',testItem))
}