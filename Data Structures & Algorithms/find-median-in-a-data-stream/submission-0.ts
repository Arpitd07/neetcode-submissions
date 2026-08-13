class Heap {
    private heap: number[]
    private isMaxHeap: boolean

    constructor(isMaxHeap: boolean) {
        this.heap = []
        this.isMaxHeap = isMaxHeap
    }

    insert(num: number): void {
        this.heap.push(num)
        let index = this.heap.length - 1
        this.siftUp(index)
    }

    peek(): number {
        return this.heap[0]
    }

    remove(): number {
        if (this.heap.length === 1) {
            return this.heap.pop()!
        }
        const top = this.heap[0]
        this.heap[0] = this.heap[this.size() - 1]
        this.heap.pop()
        this.siftDown(0)
        return top
    }

    private siftUp(index: number): void {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2)
            if (!this.compare(this.heap[index], this.heap[parent])) {
                break
            }
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]]
            index = parent
        }
    }

    private siftDown(index: number): void {
        while (true) {
            const left = 2 * index + 1
            const right = 2 * index + 2

            let best = index

            // Compare with left child
            if (
                left < this.heap.length &&
                this.compare(this.heap[left], this.heap[best])
            ) {
                best = left
            }

            // Compare with right child
            if (
                right < this.heap.length &&
                this.compare(this.heap[right], this.heap[best])
            ) {
                best = right
            }

            // Current node is already in the correct position
            if (best === index) {
                break
            }

            [this.heap[index], this.heap[best]] =
                [this.heap[best], this.heap[index]]

            index = best
        }
    }

    private compare(a: number, b: number): boolean {
        if (this.isMaxHeap) {
            return a > b
        }
        else {
            return a < b
        }
    }

    size(): number {
        return this.heap.length;
    }
}
class MedianFinder {
    private maxHeap: Heap
    private minHeap: Heap
    constructor() {
        this.maxHeap = new Heap(true)
        this.minHeap = new Heap(false)
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num: number): void {
        // Put the number into the appropriate half
        if (
            this.maxHeap.size() === 0 ||
            num <= this.maxHeap.peek()
        ) {
            this.maxHeap.insert(num)
        } else {
            this.minHeap.insert(num)
        }

        // maxHeap is allowed to have at most
        // one more element than minHeap.

        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            const value = this.maxHeap.remove()
            this.minHeap.insert(value)
        }

        if (this.minHeap.size() > this.maxHeap.size()) {
            const value = this.minHeap.remove()
            this.maxHeap.insert(value)
        }
    }

    /**
     * @return {number}
     */
    findMedian(): number {
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.peek()
        }

        return (this.maxHeap.peek() + this.minHeap.peek()) / 2
    }
}
