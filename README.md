# Frontend of Thermal Comfort System

## Install Instructions and Project Notes

[INSTALL INSTRUCTIONS AND PROJECT NOTES](https://www.gitbook.com/book/erdesi90562/home-status-project/details)

# Technologies

- Languages
  - JavaScript
  - Node

- Frameworks
  - Frontend
    - Boostrap
    - Handlebars
  - Backend
    - Express

- Databases
  - PostgreSQL

# Take and Landing

(**The approach you took**)


# Pitch Deck

## Target Market

The targeted user for this webapp are the maker and people who would like to monitor
things they own or property they care about. This application will allow for users to
set rules for nodes on there property. For instance they coul monitor how much water is beeing consumed
at there home or how much oil is left in ther fuel tanks in **Real Time**.
They will be able to set email, text, and dash alerts.

- Users dont have to be logged in to access the "monitor dash". (shows on page load)
    - "Monitor Dash" users can see live status feeds. (Read ONLY)
- User can login and have access to dash and rules page.
- Any Authenticated User can
    - Create a rule
    - Read all rules
    - Update a rule
    - Destroy a rule
- Any authenticated user can logout
- Any authenticated user can change password

# The unsolved.

For the most part I tried to use my issue tracker to keep my a list of my running
issues.
1. **Unsolved Problems**
    2. The rules table buttons don't have click handlers on them.
    2. The back end supports CRUD for rules but currently the front end doesn't

1. **Major Hurdles**
  2. Getting user auth to work correctly
  2. Understanding how promises work. (Nesing and resolving)

# Links

[Web APP Frontend](http://edesilets.github.io/thermal-comfort-system-frontend)

[Frontend](https://github.com/edesilets/thermal-comfort-system-frontend)

[Backend](https://github.com/edesilets/thermal-comfort-system-API)

[Web APP Backend](http://homestatus.ddns.net:3000)


# Screen shots

## Mobile Dash Board

![Mobile Dash](https://github.com/edesilets/thermal-comfort-system-frontend/blob/master/pictures/Mobile-DashBoard.png "Mobile dash board view")

## Mobile Rules Board

![Mobile Rules Board](https://github.com/edesilets/thermal-comfort-system-frontend/blob/master/pictures/Mobile-Rules.png)

### Bootstrap Template

[SB Admin](http://startbootstrap.com/template-overviews/sb-admin/)

[Github SB Admin](https://github.com/BlackrockDigital/startbootstrap-sb-admin)

### Weather Icons

Add  https://erikflowers.github.io/weather-icons/
