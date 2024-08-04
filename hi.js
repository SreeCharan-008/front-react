// <!DOCTYPE html>
// <html>
// <head>
//     <title>Event Listeners Example</title>
// </head>
// <body>
//     <button id="clickButton">Click Me</button>
//     <p id="hoverParagraph">Hover over this text.</p>

//     <script>
//         {/* // Function to handle button click/ */}
//         function handleButtonClick() {
//             alert('Button clicked!');
//         }

//         // Function to handle mouse over
//         function handleMouseOver() {
//             document.getElementById('hoverParagraph').style.color = 'blue';
//         }
//   {/* Function to handle mouse over  */}
//         function handleMouseOver() {
//             document.getElementById('hoverParagraph').style.color = 'blue';
//         }

//         {/* // Add event listeners */}
//         document.getElementById('clickButton').addEventListener('click', handleButtonClick);
//         document.getElementById('hoverParagraph').addEventListener('mouseover', handleMouseOver);
//     </script>
// </body>
// </html>
<!DOCTYPE html>
<html>
<head>
    <title>Event Handlers Example</title>
</head>
<body>
    <button onclick="handleClick()">Click Me</button>
    <p id="hoverText" onmouseover="handleMouseOver()">Hover over this text.</p>

    <script>
        function handleClick() {
            alert('Button clicked!');
        }

        function handleMouseOver() {
            document.getElementById('hoverText').style.color = 'yellow';
        }
    </script>
</body>
</html>