//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}


export class LinkedList {
  constructor(value){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  push(value) {
    const node = new Node(value);

    if (!this.head){
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  pop() {
    if (!this.tail) return undefined;

    const removed = this.tail;

    if (this.head === this.tail){
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
      removed.prev = null;
    }

    this.length--;
    return removed.value;
  }

  shift() {
    if (!this.head) return undefined;

    const removed = this.head;

    if (this.tail === this.head){
      this.head = null;
      this.tail = null;
    }else{
      this.head = removed.next;
      this.head.prev = null;
      removed.next = null;
    }

    this.length--;
    return removed.value;
  }

  unshift(value) {
    const node = new Node(value);
    
    if (!this.head){
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;
  }

  delete(value) {
    let current = this.head;

    while(current){
      
      if(current.value === value){

        if(this.head === this.tail){
          this.head = null;
          this.tail = null;
          this.length = 0;
          return;
        }
  
        if(current === this.head){
          this.head = current.next;
          this.head.prev = null;
          current.next = null;
          this.length--;
          return;
        }
  
        if(current === this.tail){
          this.tail = current.prev;
          this.tail.next = null;
          current.prev = null;
          this.length--;
          return;
        }
  
        const prev = current.prev;
        const next = current.next;
        prev.next = next;
        next.prev = prev;
  
        current.prev = null;
        current.next = null;
  
        this.length--;
        return;
      }

      current = current.next;
    }
  }

  count() {
    return this.length;
  }
}
