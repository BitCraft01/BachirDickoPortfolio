import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      desc: 'A mock shopping platform of Amazon',
      image: project1,
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Fitness Tracker App',
      desc: 'An app that tracks calorie loss, miles, progress',
      image: project2,
      tags: ['React Native', 'Firebase'],
    },
    {
      id: 3,
      title: 'Content Generator',
      desc: 'Generates all types of content from various social media platforms',
      image: project3,
      tags: ['Python', 'openAI'],
    },
    {
      id: 4,
      title: 'Dashboard',
      desc: 'An everyday planner to keep with the activities of life',
      image: project4,
      tags: ['Vue.js', 'Chart.js'],
    },
    {
      id: 5,
      title: 'Task Management',
      desc: 'A checklist to keep track of tasks to be done',
      image: project5,
      tags: ['Laravel', 'Vue.js'],
    },
    {
      id: 6,
      title: 'Calculator',
      desc: 'An app that lets you add, substract, multiply and divide integers',
      image: project6,
      tags: ['Next.js', 'Three.js'],
    },
  ]

  return (
    <section
      id="projects"
      style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
      className="relative py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            My{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Projects
            </span>
          </h2>

          <p
            className="max-w-xl mx-auto"
            style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
          >
            A showcase of my recent work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? 'linear-gradient(to right, #1f2937, #111827)'
                  : 'linear-gradient(to right, #ffffff, #f9fafb)',
                borderColor: darkMode ? '#374151' : 'e5e7eb',
              }}
              className="group rounded-xl border hover:border-orange-500/50 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-36 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: darkMode ? 'white' : '#1f2937' }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm mb-3"
                  style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
                >
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                        color: darkMode ? '#d1d5db' : '#4b5563',
                      }}
                      className="px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href="#"
                    style={{
                      backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                      color: darkMode ? 'white' : '#374151',
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>

                  <a
                    href="#"
                    style={{
                      background:
                        'linear-gradient(to right, #f97316, #f59e0b)',
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/BitCraft01?tab=repositories" target="_blank"
            style={{
              background: 'linear-gradient(to right, #f97316, #f59e0b)',
            }}
            className="inline-flex items-center gap-2 px-7 py-4 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaGithub />
            <span>View All Ptojects</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
