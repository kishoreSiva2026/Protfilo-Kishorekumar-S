import React from 'react'
import './Project.css'

function Project() {
  return (
    <div>
          <section id="projects" class="container py-4 animated-section">
    <h2 class="section-title">Projects</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="project-card">
          <h5><i class="bi bi-window"></i> Personal Portfolio Website</h5>
          <p>A responsive portfolio website built with HTML, CSS, and Bootstrap to showcase my skills and projects.</p>
          <a href="#" target="_blank"><i class="bi bi-box-arrow-up-right"></i> View Project</a>
        </div>
      </div>
      <div class="col-md-6">
        <div class="project-card">
          <h5><i class="bi bi-cloud-sun"></i> Weather App</h5>
          <p>Developed a weather application using JavaScript and OpenWeatherMap API to display real-time weather data.</p>
          <a href="#" target="_blank"><i class="bi bi-box-arrow-up-right"></i> View Project</a>
        </div>
      </div>
      <div class="col-md-6">
        <div class="project-card">
          <h5><i class="bi bi-check2-square"></i> Task Manager</h5>
          <p>A simple task manager built with React for adding, editing, and deleting daily tasks.</p>
          <a href="#" target="_blank"><i class="bi bi-box-arrow-up-right"></i> View Project</a>
        </div>
      </div>
      <div class="col-md-6">
        <div class="project-card">
          <h5><i class="bi bi-database"></i> Student Database System</h5>
          <p>Created a Python-based student database system with CRUD operations and SQLite integration.</p>
          <a href="#" target="_blank"><i class="bi bi-box-arrow-up-right"></i> View Project</a>
        </div>
      </div>
    </div>
  </section>

    </div>
  )
}

export default Project