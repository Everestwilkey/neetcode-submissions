class MinStack {
    constructor() {
         this.stack = []
         this.min = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if(this.min.length == 0){
            this.min.push(val)
            return
        }
        if(val <= this.min[this.min.length - 1]){
            this.min.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.stack[this.stack.length - 1] == this.min[this.min.length - 1]){
            this.min.pop()
        }
        this.stack.pop()
       
    }

    /**
     * @return {number}
     */
    top(
       
    ) {
        let num = this.stack[this.stack.length - 1]
        return num
    }

    /**
     * @return {number}
     */
    getMin() {
        let num = this.min[this.min.length - 1]
        return num
    }
}
