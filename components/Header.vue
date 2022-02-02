<template>
  <nav
    class="bg-dark navbar navbar-expand-lg py-lg-1 text-uppercase text-primary"
  >
    <div class="container">
      <a class="fw-normal navbar-brand text-capitalize text-primary" href="#">
        Ticketr
      </a>
      <button
        class="navbar-toggler bg-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown-3"
        href="#navbarNavDropdown-3"
        aria-controls="navbarNavDropdown-3"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown-3">
        <ul class="mb-2 mb-lg-0 ms-auto navbar-nav">
          <li class="nav-item">
            <a
              class="active nav-link px-lg-3 py-lg-4 text-capitalize text-primary"
              aria-current="page"
              href="/#"
            >
              Home
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link px-lg-3 py-lg-4 text-capitalize text-primary"
              href="/#about"
            >
              About
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link px-lg-3 py-lg-4 text-capitalize text-primary"
              href="/#abouttheteam"
            >
              About The Team
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link px-lg-3 py-lg-4 text-capitalize text-primary"
              href="/#features"
            >
              Features
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link px-lg-3 py-lg-4 text-capitalize text-primary"
              href="/#contactus"
            >
              Contact
            </a>
          </li>
        </ul>
        <div class="ms-lg-3" v-if="!1">
          <a class="btn btn-primary pe-3 ps-3 text-capitalize" href="#"> </a>
          <a class="btn btn-primary pe-3 ps-3 text-capitalize" href="#">
            Log Out
          </a>
        </div>
        <div class="ms-lg-3" v-else>
          <a class="btn btn-primary pe-3 ps-3 text-capitalize" href="#">
            Login
          </a>
          <a class="btn btn-primary pe-3 ps-3 text-capitalize" href="#">
            Sign up
          </a>
        </div>
      </div>
    </div>
    <script src="/assets/bootstrap.bundle.min.js"></script>
  </nav>
</template>