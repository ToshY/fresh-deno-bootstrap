# 🍋 Fresh Bootstrap

A [Deno Fresh](https://fresh.deno.dev/) example application with static Bootstrap assets (no Tailwind).

## 🧰 Getting Started

### ‼️ Prerequisites

* [Docker (27.0.3+)](https://docs.docker.com/engine/install/)
* [Task (3.40+)](https://taskfile.dev/installation/) (optional)

## 🛠️ Usage

Run the application.

```shell
task deno:run:watch
```

You can now access the application at [`http://localhost:8002`](http://localhost:8002).

## Dependencies

The following external dependencies were locally installed inside the [`./static/vendor`](./static/vendor) directory.

- [x] [Bootstrap 5.3.3](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/)
    - [x] CSS: https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
    - [x] CSS map: https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css.map
    - [x] JS: https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js
    - [x] JS map: https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js.map

You can update, add or remove dependencies to your liking, just make sure you update the [`routes/_layout.tsx`](./routes/_layout.tsx) with the correct path.
