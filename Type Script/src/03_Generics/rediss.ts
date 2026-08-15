interface RedisHeap<U> {
  [key: string]: U;
}

class Rediss {
  memory_heap: RedisHeap<unknown> = {};
  constructor() {
    this.memory_heap = {};
  }

  save_to_heap<U>(key: string, val: U) {
    this.memory_heap[key] = val;
  }

  get_from_heap<T>(key: string): T | string {
    if (this.memory_heap[key]) {
      return this.memory_heap[key] as T;
    } else {
      return "Item not found";
    }
  }

  remove_from_heap(key: string) {
    if (this.memory_heap[key]) {
      delete this.memory_heap[key];
    }
  }
}
