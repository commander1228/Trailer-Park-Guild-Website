import type { TestItem } from "@/types/testFakeItem";
import { getApi, postApi } from "./api";
import type { WowItem } from "@/types/Item";


export async function addTestItems(testItem: TestItem[]) {
    const result = await postApi('/api/guild/add', testItem)
    console.log("added item : ", result);
}

export async function getWowItems(): Promise<WowItem[]> {
    return getApi<WowItem[]>('/api/guild');
}