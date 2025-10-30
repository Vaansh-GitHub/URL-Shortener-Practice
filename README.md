<h1>URL Shortener</h1>
<p>Design a URl shortener service that takes in a valid URL and
returns a shortened URL,redirecting the user to the previously provided URL.
</p>

<p>Also keep track of total visits/click on the URL
</p>

<h2>Routes</h2>

<p>POST /URL - Generates a new short URL and returns the shortened URL
in the format example.com/random-id

GET /:id - Redirects the user to the original URL

GET /url/analytics/:id - Returns the clicks for the provided short id.</p>
