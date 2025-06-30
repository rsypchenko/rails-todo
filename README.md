# README

ToDo list application built on Ruby on Rails with the Hotwire stack.

## Tech Stack

- Ruby on Rails 7+
- Hotwire (Stimulus, Turbo)
- TailwindCSS
- SQLite (default, can be swapped for PostgreSQL)

## Features

- Add, edit, complete, and delete tasks
- Inline editing with Stimulus
- Real-time UI updates with Turbo Streams
- Responsive and modern UI with TailwindCSS
- Toast notifications for actions

## Getting Started

### Prerequisites
- Ruby 3.1+
- Node.js & Yarn (for JS/CSS bundling)
- SQLite (default) or PostgreSQL

### Setup

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd rails_todo
   ```
2. **Install dependencies:**
   ```sh
   bundle install
   yarn install
   ```
3. **Set up the database:**
   ```sh
   bin/rails db:setup
   ```
4. **Build CSS/JS assets:**
   ```sh
   ./bin/dev
   # or for a one-time build
   ./bin/build
   ```
5. **Start the development server (Puma):**
   ```sh
   bin/rails server
   ```
6. **Visit the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running Tests

```sh
bin/rails test
```

## Development
- Hot reloading for JS/CSS via `./bin/dev`
- Tailwind config: `tailwind.config.js` in project root
- Main entry points: `app/javascript/application.js`, `app/assets/builds/tailwind.css`
- Turbo/Stimulus controllers: `app/javascript/controllers/`

## Deployment
- Ensure environment variables are set for production DB, secret key, etc.
- Precompile assets:
  ```sh
  RAILS_ENV=production bin/rails assets:precompile
  ```
- Run migrations:
  ```sh
  RAILS_ENV=production bin/rails db:migrate
  ```

## License
MIT

