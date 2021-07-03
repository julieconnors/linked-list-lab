function getName(node) {
    return node.name
}

function headNode(linkedList, collection) {
    let head = collection[linkedList];
    return head;
}

function next(head, collection) {
    let nextAddress = head["next"];
    return collection[nextAddress];
}

function nodeAt(index, linkedList, collection) {
    let node = headNode(linkedList, collection)
    for (let i = 0; i < index; i++) {
        node = next(node, collection)
    }
    return node;
}

function addressAt(index, linkedList, collection) {
    if (index === 0){
        return linkedList
    } else {
        let node = nodeAt(index - 1, linkedList, collection)
        return node.next;
    }
}

function indexAt(node, collection, linkedList) {
     let currentNode = headNode(linkedList, collection)
     let index = 0;

     while(currentNode != node) {
         index++
         currentNode = next(currentNode, collection)
     }
     return index
}

function insertNodeAt(index, value, linkedList, collection) {
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let newNode = collection[value]
    newNode.next = previousNode.next
    previousNode.next = value
}

function deleteNodeAt(index, linkedList, collection) {
    let node = nodeAt(index, linkedList, collection)
    let previousNode = nodeAt(index - 1, linkedList, collection)
    previousNode.next = node.next

}