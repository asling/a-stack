import {Stack} from '../stack'

var stackObj = new Stack();
stackObj.push('Andy');
stackObj.push('Lucy');
stackObj.push('Lily');

print('length:'+stackObj.length());
print(stackObj.peek());

var popped = stackObj.pop();
print('The popped element is:' + popped);
print(stackObj.peek());

stackObj.clear();
print('length:'+stackObj.length());
print(s.peek());

stackObj.push('Cicilie');
print(stackObj.peek());

