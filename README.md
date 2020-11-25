# Cats Facts
List of cat facts using the Facts API 
https://cat-fact.herokuapp.com/facts

## Tecnologies
- PHP - Laravel
- JavaScript - Vue + Vuex
- CSS - Tailwind
    
## Exercise instructions
### Client
#### Fact List
- Load 10 facts from the API
- Display them in the Fact List on the left
- Double clicking on the fact moves it to Details panel and removes it from Fact
List
#### Details Panel
- In details panel display for each fact:
    - Fact
    - User (First name and Last name)
    - Rating - upvotes
- Double clicking on the fact in Details panel moves it back to Facts List
- The Details Panel will have a “Save” button that will make a POST request to
Server service and send the facts that are currently listed on the Details Panel

### Server
- Create an endpoint to Save the facts
- It should create a JSON with the received facts. Each item should have
    - Fact
    - User (First name and Last name)
    - Rating - upvotes
- Save the file on the server’s file system
- Each new save will overwrite the previous file
