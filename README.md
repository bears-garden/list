# @bears-garden/list

linked list implementation

# Usage

`import List from "@bears-garden/list";`

### insert

@returns inserted node

`const node = List.insert(1);`  
`const node2 = List.insert(2);`

### append

@returns new node

`var node = Node.append(2);`

### find

@returns the node

`var n = Node.find(1);`

### remove

@returns the list

`list = Node.remove(2);`

## OBSERVATIONS:

The speed of the linked list is embarassingly slower than the array based list.
There must be some optimizations the node compiler is doing with javascript.
