import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "TypeScript",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js", "javaScritp", "SQL", "MongoDB",];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Hardworking, energetic programmer with 900 hours of experience in
              full back-end development. A dedicated student who is a strong
              listener and able to work effectively under pressure. Proficient
              in evaluating the costs and benefits of potential actions, and
              skilled in analyzing how systems should function, including how
              changes in conditions, operations, and environments affect
              outcomes. Experienced in understanding the implications of new
              information for both current and future decision-making. Bilingual
              in Spanish. Seeking a position as an Associate Application
              Developer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> certification by west-mec </strong> - West-MEC Coding
                  Program
                </li>
                <li>
                  Completed a 900-hour program focused on designing and
                  developing software, building applications, and writing and
                  testing code. Gained hands-on experience in problem-solving,
                  debugging, and applying best practices to develop efficient
                  and reliable systems.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Family Bakery Business — Team Member / Operations
                    Assistant{" "}
                  </h4>
                  <p>
                    Coordinated with team members to source and purchase
                    ingredients and supplies for daily production Prepared and
                    baked a variety of goods while maintaining quality and
                    consistency standards Packaged products efficiently for
                    sale, ensuring proper presentation and freshness Assisted in
                    selling baked goods to customers, providing friendly service
                    and handling transactions Collaborated in daily operations
                    to support smooth workflow from preparation to final sale
                  </p>
                </div>

                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
