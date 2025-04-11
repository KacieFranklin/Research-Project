# Perseplax
  
## Purpose:
Our website serves to allow users to create 3-D looking images with a parallax effect that can be saved and seemlessly imported into their HTML webpages.

It helps people who are making websites that want a parallax effect for their logo or other images without the need to code them all. It can also be used as a free digital art website for artists who can't afford paying for any digital art programs.

## Audience:
Perseplax is for anyone with an interest in art looking for a free program and for people making a website and wanting a parallax effect for their logo or background without needing to code it.

## Live Site: [Perseplax](https://kaciefranklin.github.io/Research-Project/)

## Design Rationale:
We all have art as a common interest and believed it would be fun to create an art website that users can use for free to draw. As well as that, it would be effeciant for web developers to create a parallax effect with any images they need without having to code.

We wanted Perseplax to be easily navigatable so anyone can easily find their way around the website without difficulties. Including adding the 'Start Drawing' button on the homepage so users can immediately start creating. 

Using our audience personas, we discovered some issues with our preliminary design of the website. Our first persona, John Doe, had issues with colours due to his colourblindess and slow PSD-to-PNG conversion. To fix this we decided on adding colour sliders for colour selection as well as optimizing file operations.

Our second persona, Joe Smith, had difficulties with understanding what the tools do when using the drawing tool. For this problem, we decideded on adding a pop-up beside the tools when the mouse hovers over them to give the user information on what the tools do.

For our final persona, Jane Furlong, she found it difficult to navigate from the 'layer view' to the 'front view', as well as finding the About page to learn more about the tool and its developers. For this, we decided to add the About page and all the other pages on the header of the page, or through the hamburger menu if using mobile. We found the easiest soltion for the 'layer view' and 'front view' to have them function as a switch. If a user starts in 'layer view' then click it with the mouse, the user would then be in 'front view' and vice versa.

## Key Features:
Our website features a Homepage, an About us page, a Contact page, a Blog/News page, a FAQ page, an Error 404 page, a Terms and Service page and the Drawing tool page.

For the mobile version, the Hamburger Menu can be pressed which displays a box with links for all the pages and remains on screen when scrolling.
The Terms and Services page is a simple form where clicking 'Accept' brings the user to the homepage.

The homepage has a parallax effect that moves when the mouse moves around the screen as well as a button that will bring the user to the Drawing Tool page.
The main part of the website, the Drawing Tool, allows users to draw on the canvas with the mouse. Colours can also be changed from one to the other as well as erasing all lines from the canvas.
The About page has hover effects when the mouse goes over the text and smaller headings.
The FAQ page also has hover effects, making the boxes move up slightly when the mouse is on them, as well as expanding the text boxes upon clicking 'Read more'.

The Blog/News page uses the same hover effects as the FAQ page on its boxes.
The Contact Us page has cards that expand, change opacity as well as the box-shadow becoming solid when the mouse hovers over them.
Finally for the Products and Services page the icons glow when the mouse hovers over them and more boxes display to the right of the icons.

All of our pages are responsive, fitting any screen size. We aimed to keep every screen size as consistent as possible with the smaller screens and mobile version 
having some small differences. For the mobile version the cards on the Contact page are aligned vertically and the icons on the Products and Services page always has the information about the tools shown.
For accsessibility, we have alt text for every image throughout the site for anyone with vision impairment to be able to use a screen reader.
We intend to have an option in the Drawing Tool to allow anyone with any form of colourblindness to change the colours of the colour wheel.

## Technologies Used:
We used components to create cards, the drawing tool and the parallax effect through using svelte.js.

A huge majority of our code is CSS, which we used for colours, formatting and responsiveness on smaller device sizes. We also used HTML for our headers and paragraphs. The parallax effect and drawing tool were both made using javascript.

Penpot was used to create the icons, background, paint splatters and logo for our website.

## Team Contributions:
### Kacie Franklin: 
I mainly contributed to the Contact page, Terms of Service page and the Products and Services page and the Drawing Tool.
I had also created the brush, eraser, lasso, drag and cut tool icons, the background and paint splatters for the homepage and the website's logo. I also added the header, the footer and fix up some code here and there.
It was a struggle learning Svelte at first, I wouldn't say I'm an expert at it, but I feel like I have a better understanding of it now.
### Robert Iovu:
I mainly did the about page, the blog/news page and the FAQ page. Also the Parallax effect on the home page.
It was a struggle to get used to using svelte however it does allow for everything to be less complex in terms of code, and while im not amazing at coding, i'd say that it does allow for quite great results
### Cialan Patterson:
I did the homepage, the error page, the interactions on the Products and services page, hamburger menu as well as the general design of the website. 
I had trouble getting the components to integrate in the ways I wanted, not helped by the weird structure.
Svelte has its ups and downs, it makes the process of creating a website easier and there are many useful options in the svelte config but can also be a hassle due to not being able to use some vanilla js features and needing specific content structure.
The build was especially tedious, and didn't align with the preview build at all. Maybe a server issue.
I struggled a lot to navigate the svelte documentation, so I mostly relied on vanilla js and occasionally referenced the stack overflow forums.
I would like to build a library of svelte components to reference or to have easier access to some open source svelte components that I could draw from.

## Deployment Notes:
[Perseplax](https://kaciefranklin.github.io/Research-Project/)

We had some problems when trying to deploy our website. For instance, Git claiming there's no .noJekyll file and attempting to deploy the website with jekyll and failling to deploy because of it, even though a .nojekyll file was added. Another issue is when trying to use cp -r svelte-app/build/* ./, vs code claimed that there was no build folder. These are only two of the issues we encountered among a few others. 

## Reflections & Next Steps:
Some things we think went well in our project is the overall simplistic aesthetic of the website, like the gradiant background. We also thought the hamburger menu came out nicely. The parallax effect also looks pretty good on the homepage, adding a bit of interactivity to it upon first entering the website.

There are quite a few things that could have been better, the drawing tool is definately in need of a lot of improvement. It is extremely bare bones and lacks a lot of tools, formatting and saving and exporting images, among many other things we intented to have for it. Some of the other pages also feel too plain, having a lot of white space.

We didn't have the best time management, so set deadlines for when things need to be done by instead of leaving things till almost the last minute. 
