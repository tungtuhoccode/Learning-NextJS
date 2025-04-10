### File Structure 
App folder is the most important folder in a nextjs App

Page.js is the reserved name for the file that will be used to render the page.

### NextJS lage.js file
```` 
export default function Home() {
  
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
}
```` 

This is a file that is rendered on the server. It is a server component.   

### To add another route
Step 1: Under the parent route folder, create another folder with the name of the route you want to add.
Step 2: Inside the new folder, create a file named "page.js". This file will be used to render the page for the new route.
Step 3: Inside the "page.js" file, you can add the code to render the page for the new route.

### Navigation between pages
To create navigation between pages, there are two methods

1. For Single App Application 
For this, we can import the Link element in NextJS and implement routing. 

- Step 1: "import Link from "next/link";"
- Step 2: Create a link element like so
    ````
    <Link href="/about">About</Link> //this will take us to the about page
    ````

2. For Multi App Application
For this, we can just use the anchor tag like so
````
    <a href="/about">About</a> //this will take us to the about page
````

### NextJS layout.js file
````
    export const metadata = {
    title: 'NextJS Course App',
    description: 'Your first NextJS app!',
    };

    export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
    }
````
The layout.js file is used to define the layout for a page. 

### Reserved file name
Reserved Filenames

Important: These filenames are only reserved when creating them inside of the app/ folder (or any subfolder). Outside of the app/ folder, these filenames are not treated in any special way.

Here's a list of reserved filenames in NextJS

1. page.js => Store the content of the route

2. layout.js => Create a new layout that wraps sibling and nested pages

3. not-found.js => Fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts)

4. error.js => Fallback page for other errors (thrown by sibling pages or nested pages or layouts)

5. loading.js => Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data

6. route.js => Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)

### To create dynmic routes