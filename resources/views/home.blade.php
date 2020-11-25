<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/app.css" rel="stylesheet">
        <title>Cat Facts</title>
    </head>
    <body>
        <div id="app">
            <header class="bg-white shadow">
                <div class="flex max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                  <h1 class="text-3xl font-bold leading-tight text-gray-900">
                    CATS FACTS
                  </h1>
                </div>
              </header>
              <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="lg:flex">
                        <facts-list class="lg:w-1/4 lg:mr-5 mb-5"></facts-list>
                        <details-panel class="lg:flex-1 mb-5"></details-panel>
                    </div>
                    <div class="flex flex-row-reverse object-right text-indigo-500 underline"><a target="_blank" href="/cats-facts">view JSON file</a></div>
                </div>
              </main>
            </div>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
