import type { TestItem } from "@/types/testFakeItem";
import { postApi } from "./api";


export async function addTestItem(testItem: TestItem) {
    const result = await postApi('/api/guild/add', testItem)
    console.log("added item : ", result)
}