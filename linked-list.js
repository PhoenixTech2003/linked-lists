function linkedList(){
    let head = node("head")

    function append(value){
        traverseAppend(head,value)

    }

    function prepend(value){
        let temp = head.next;
        head.next = {
            val : value,
            next : temp,
        }
    }

    function size(){
        let sizeOfList = traverseSize(head);
        return sizeOfList;
    }

    function header(){
        let headValue = traverseToHead(head);
        return headValue;
    }

    function tail(){
        return traverseTail(head);
    }

    function indexAt(position){
        return traverseToPosition(head,position);
    }

    function pop (){
        let lastButOnepos = size();
        traverseToRemove(head,lastButOnepos);
    }

    function contain(value){
        return traverseToFind(head,value);
    }

    function find(value){
        return traverseToIndex(head,value);
    }

    function toString(){
        return traverseToString(head);
    }

    


    function traverseAppend(node,value){
        if (node.next === null){
            let pos = node.pos + 1;
            node.next = {
                val : value,
                next : null,
                pos : pos,
            }
            
            return;
        }

        else{
            traverseAppend(node.next, value)
        }
    }


    function traverseSize(node, count = 0){
        if (node.next === null){
            return count;
        }else{
            count = count + 1;
            return traverseSize(node.next, count)
        }

    }

    function traverseToHead(node, count = 0){
        if (count  === 1){
            return node.val;
        }else{
            count = count + 1;
            return traverseToHead(node.next, count)
        }

    }

    function traverseTail(node){
        if (node.next === null){
            return node.val;
        }else{
            return traverseTail(node.next)
        }

    }

    function traverseToPosition(node,position){
        if (node.pos === position + 1){
            return node.val;
        }else{
            return traverseToPosition(node.next,position)
        }

    }


    function traverseToRemove(node,position){
        if (node.pos === position - 1){
            node.next = null
            return;
        }else{
            traverseToRemove(node.next,position)
        }

    }

    function traverseToFind(node, value){
        if (node.val === value){
            return true;
        }else if (node.next === null){
            return false;
        }
        else{
            return traverseToFind(node.next, value);
        }

    }
    
    function traverseToIndex(node, value){
        if (node.val === value){
            return node.pos - 1;
        }else if (node.next === null){
            return null;
        }
        else{
            return traverseToIndex(node.next, value);
        }

    }

    function traverseToString(node, string = ''){
        if (node.next === null){
            return string.concat(` (${node.val}) -> ${node.next}`);
        }else{
            string = string.concat(` (${node.val}) -> `)
            return  traverseToString(node.next, string);
        }

    }

    function traverseToInsert(node,position, value){
        if (node.pos === position - 1){
            let temp = node.next;
            node.next = {
                val : value,
                next: temp,
                pos : node.pos + 1,
            }  
        }else{
            traverseToInsert(node.next,position, value)
        }

    }

   


    return {append, prepend, size, header, tail, indexAt,pop,contain, find, toString}
    




}


function node(value){
    let node = {
        val : value,
        next: null,
        pos: 0,
    }

    return node;

}



let test = linkedList();








