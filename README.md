1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: the difference between is 
1. getElementById:By getElementById we catch only one particular element from html file by using id name
2.getElementsByClassName:By getElementsByClassName we can catch multiple element from html file by their class name.
3.querySelector:By querySelector, we can select only one element using a CSS selector (class, id, or tag)
4.querySelectorAll:catch all elements from the DOM that match a given CSS selector.

2. How do you create and insert a new element into the DOM?

ans:Making a new element in the DOM means creating a new HTML tag with JavaScript, giving it some text or a class if you want, and then putting it somewhere on the page so it actually shows up.

 What is Event Bubbling? And how does it work?

ans: Making a new element in the DOM is just like creating a new box, writing something in it, maybe giving it a name or style, and then putting it on the page so everyone can see it


4. What is Event Delegation in JavaScript? Why is it useful?


Event Delegation is when you attach a single event listener to a parent element instead of adding one to every child element. When a child is clicked (or interacts), the parent “catches” the event and handles it.


5. What is the difference between preventDefault() and stopPropagation() methods?

1.preventDefault() stops the browser’s default action for an event.

2.stopPropagation() stops the event from bubbling up or trickling down the DOM, so parent or child elements don’t get the event.