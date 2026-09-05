<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Mocha Learning Materials</title>

    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }

        body {
            background: #f4f7fb;
            color: #222;
        }

        header {
            background: #123c69;
            color: white;
            text-align: center;
            padding: 25px;
        }

        header h1 {
            font-size: 30px;
        }

        nav {
            background: #09243d;
            padding: 15px;
            text-align: center;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin: 0 12px;
            font-weight: bold;
        }

        nav a:hover {
            color: #ffd166;
        }

        .hero {
            text-align: center;
            padding: 50px 20px;
            background: #1976d2;
            color: white;
        }

        .hero h2 {
            font-size: 32px;
            margin-bottom: 15px;
        }

        .search {
            max-width: 600px;
            margin: 25px auto 0;
        }

        .search input {
            width: 100%;
            padding: 15px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
        }

        .container {
            width: 92%;
            max-width: 1200px;
            margin: auto;
        }

        section {
            padding: 45px 0;
        }

        section > h2 {
            text-align: center;
            color: #123c69;
            margin-bottom: 30px;
        }

        .level {
            margin-bottom: 45px;
        }

        .level-title {
            background: #123c69;
            color: white;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
        }

        .cards {
            display: grid;
            grid-template-columns:
                repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .card {
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.12);
            transition: 0.3s;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .card h3 {
            margin-bottom: 12px;
            color: #1976d2;
        }

        .card p {
            line-height: 1.6;
            margin-bottom: 18px;
        }

        .button {
            display: inline-block;
            background: #1976d2;
            color: white;
            padding: 11px 18px;
            border-radius: 6px;
            text-decoration: none;
        }

        .button:hover {
            background: #0d47a1;
        }

        .notes {
            border-top: 5px solid #2e7d32;
        }

        .papers {
            border-top: 5px solid #ef6c00;
        }

        .books {
            border-top: 5px solid #7b1fa2;
        }

        .notice {
            background: #fff3cd;
            padding: 15px;
            margin: 25px 0;
            border-radius: 8px;
        }

        footer {
            background: #09243d;
            color: white;
            text-align: center;
            padding: 30px;
            margin-top: 30px;
        }

        @media(max-width: 600px) {

            header h1 {
                font-size: 24px;
            }

            .hero h2 {
                font-size: 25px;
            }

            nav a {
                display: inline-block;
                margin: 5px;
            }
        }
    </style>
</head>

<body>

<!-- HEADER -->

<header>

    <h1>📚 MOCHA LEARNING MATERIALS</h1>

    <p>
        University • Secondary • CBC
    </p>

</header>


<!-- NAVIGATION -->

<nav>

    <a href="#home">Home</a>

    <a href="#university">University</a>

    <a href="#secondary">Secondary</a>

    <a href="#cbc">CBC</a>

</nav>


<!-- HOME -->

<div class="hero" id="home">

    <h2>Welcome to Mocha Learning Materials</h2>

    <p>
        Notes, Past Papers and Books for Students
    </p>

    <div class="search">

        <input
            type="text"
            id="searchBox"
            placeholder="🔎 Search materials..."
            onkeyup="searchMaterials()">

    </div>

</div>


<div class="container">

    <div class="notice">

        <strong>📢 Important:</strong>

        Use and distribute books and other copyrighted
        materials only where you have permission or a
        legal right to do so.

    </div>


    <!-- ================= UNIVERSITY ================= -->

    <section id="university">

        <h2>🎓 UNIVERSITY LEARNING MATERIALS</h2>


        <div class="level">

            <h3 class="level-title">
                University Notes
            </h3>

            <div class="cards">

                <div class="card notes material">

                    <h3>💻 Computer Science</h3>

                    <p>
                        Programming, algorithms, databases,
                        networking, operating systems and more.
                    </p>

                    <a href="university/notes/computer-science.html"
                       class="button">
                        Open Notes
                    </a>

                </div>


                <div class="card notes material">

                    <h3>📐 Mathematics</h3>

                    <p>
                        Calculus, statistics, algebra and
                        discrete mathematics.
                    </p>

                    <a href="university/notes/mathematics.html"
                       class="button">
                        Open Notes
                    </a>

                </div>


                <div class="card notes material">

                    <h3>⚙️ Engineering</h3>

                    <p>
                        Engineering mathematics, electronics,
                        mechanics and other units.
                    </p>

                    <a href="university/notes/engineering.html"
                       class="button">
                        Open Notes
                    </a>

                </div>

            </div>

        </div>


        <!-- UNIVERSITY PAST PAPERS -->

        <div class="level">

            <h3 class="level-title">
                📝 University Past Papers
            </h3>

            <div class="cards">

                <div class="card papers material">

                    <h3>💻 Computer Science</h3>

                    <p>
                        University examination papers,
                        CATs and revision questions.
                    </p>

                    <a href="university/past-papers/computer-science.html"
                       class="button">
                        View Papers
                    </a>

                </div>


                <div class="card papers material">

                    <h3>📐 Mathematics</h3>

                    <p>
                        Mathematics examination papers
                        and revision questions.
                    </p>

                    <a href="university/past-papers/mathematics.html"
                       class="button">
                        View Papers
                    </a>

                </div>


                <div class="card papers material">

                    <h3>⚙️ Engineering</h3>

                    <p>
                        Engineering examination papers
                        and practice questions.
                    </p>

                    <a href="university/past-papers/engineering.html"
                       class="button">
                        View Papers
                    </a>

                </div>

            </div>

        </div>


        <!-- UNIVERSITY BOOKS -->

        <div class="level">

            <h3 class="level-title">
                📖 University Books
            </h3>

            <div class="cards">

                <div class="card books material">

                    <h3>💻 Computer Science Books</h3>

                    <p>
                        Programming and computer science
                        reference books.
                    </p>

                    <a href="university/books/computer-science.html"
                       class="button">
                        Open Books
                    </a>

                </div>


                <div class="card books material">

                    <h3>📐 Mathematics Books</h3>

                    <p>
                        Mathematics textbooks and
                        reference resources.
                    </p>

                    <a href="university/books/mathematics.html"
                       class="button">
                        Open Books
                    </a>

                </div>


                <div class="card books material">

                    <h3>⚙️ Engineering Books</h3>

                    <p>
                        Engineering textbooks and
                        reference materials.
                    </p>

                    <a href="university/books/engineering.html"
                       class="button">
                        Open Books
                    </a>

                </div>

            </div>

        </div>

    </section>


    <!-- ================= SECONDARY ================= -->

    <section id="secondary">

        <h2>🏫 SECONDARY SCHOOL MATERIALS</h2>


        <div class="level">

            <h3 class="level-title">
                📚 Secondary Notes
            </h3>

            <div class="cards">

                <div class="card notes material">

                    <h3>Form 1</h3>

                    <p>
                        Mathematics, English, Kiswahili,
                        Biology, Chemistry, Physics and more.
                    </p>

                    <a href="secondary/notes/form1.html"
                       class="button">
                        Open Notes
                    </a>

                </div>


                <div class="card notes material">

                    <h3>Form 2</h3>

                    <p>
                        Subject notes and revision materials.
                    </p>

                    <a href="secondary/notes/form2.html"
                       class="button">
                        Open Notes
                    </a>

                </div>


                <div class="card notes material">

                    <h3>Form 3</h3>

                    <p>
                        Subject notes and examination preparation.
                    </p>

                    <a href="secondary/notes/form3.html"
                       class="button">
                        Open Notes
                    </a>

                </div>


                <div class="card notes material">

                    <h3>Form 4</h3>

                    <p>
                        KCSE revision notes and subject materials.
                    </p>

                    <a href="secondary/notes/form4.html"
                       class="button">
                        Open Notes
                    </a>

                </div>

            </div>

        </div>


        <!-- SECONDARY PAPERS -->

        <div class="level">

            <h3 class="level-title">
                📝 Secondary Past Papers
            </h3>

            <div class="cards">

                <div class="card papers material">

                    <h3>KCSE Past Papers</h3>

                    <p>
                        Previous examination papers
                        and revision questions.
                    </p>

                    <a href="secondary/past-papers/kcse.html"
                       class="button">
                        View Papers
                    </a>

                </div>


                <div class="card papers material">

                    <h3>Form 1–4 Exams</h3>

                    <p>
                        School examinations and
                        practice papers.
                    </p>

                    <a href="secondary/past-papers/forms.html"
                       class="button">
                        View Papers
                    </a>

                </div>

            </div>

        </div>


        <!-- SECONDARY BOOKS -->

        <div class="level">

            <h3 class="level-title">
                📖 Secondary School Books
            </h3>

            <div class="cards">

                <div class="card books material">

                    <h3>📕 Mathematics Books</h3>

                    <p>
                        Mathematics textbooks and
                        approved learning resources.
                    </p>

                    <a href="secondary/books/mathematics.html"
                       class="button">
                        Open Books
                    </a>

                </div>


                <div class="card books material">

                    <h3>📗 Science Books</h3>

                    <p>
                        Biology, Chemistry and Physics
                        learning resources.
                    </p>

                    <a href="secondary/books/science.html"
                       class="button">
                        Open Books
                    </a>

                </div>


                <div class="card books material">

                    <h3>📘 Languages</h3>

                    <p>
                        English and Kiswahili textbooks
                        and reference materials.
                    </p>

                    <a href="secondary/books/languages.html"
                       class="button">
                        Open Books
                    </a>

                </div>

            </div>

        </div>

    </section>


    <!-- ================= CBC ================= -->

    <section id="cbc">

        <h2>👦 CBC LEARNING MATERIALS</h2>


        <!-- CBC NOTES -->

        <div class="level">

            <h3 class="level-title">
                📚 CBC Notes
            </h3>

            <div class="cards">

                <div class="card notes material">

                    <h3>Grade 1</h3>

                    <p>
                        CBC notes, activities and
                        learning resources.
                    </p>

                    <a href="cbc/notes/grade1.html"
                       class="button">
                        Open Notes
                    </a>

                </div>


                <div class="card notes material">

                    <h3>Grade 2</h3>

                    <p>
                        Grade 2 learning notes and activities.
                    </p>

                    <a href="cbc/notes/grade2.html"
                       class="button">
                        Open Notes
                    </a>

                </div>


                <div class="card notes material">

                    <h3>Grade 3</h3>

                    <p>
                        Grade 3 CBC learning materials.
                    </p>

                    <a href="cbc/notes/grade3.html"
                       class="button">
                        Open Notes
                    </a>

                </div>


                <div class="card notes material">

                    <h3>Grade 4–6</h3>

                    <p>
                        Upper primary CBC notes and activities.
                    </p>

                    <a href="cbc/notes/grade4-6.html"
                       class="button">
                        Open Notes
                    </a>

                </div>

            </div>

        </div>


        <!-- CBC PAPERS -->

        <div class="level">

            <h3 class="level-title">
                📝 CBC Past Papers
            </h3>

            <div class="cards">

                <div class="card papers material">

                    <h3>Grade 1–3</h3>

                    <p>
                        Assessment and revision papers.
                    </p>

                    <a href="cbc/past-papers/grade1-3.html"
                       class="button">
                        View Papers
                    </a>

                </div>


                <div class="card papers material">

                    <h3>Grade 4–6</h3>

                    <p>
                        Assessment papers and
                        examination practice.
                    </p>

                    <a href="cbc/past-papers/grade4-6.html"
                       class="button">
                        View Papers
                    </a>

                </div>

            </div>

        </div>


        <!-- CBC BOOKS -->

        <div class="level">

            <h3 class="level-title">
                📖 CBC Books
            </h3>

            <div class="cards">

                <div class="card books material">

                    <h3>📕 Mathematics</h3>

                    <p>
                        CBC Mathematics books and
                        approved learning resources.
                    </p>

                    <a href="cbc/books/mathematics.html"
                       class="button">
                        Open Books
                    </a>

                </div>


                <div class="card books material">

                    <h3>📗 English</h3>

                    <p>
                        English learning resources.
                    </p>

                    <a href="cbc/books/english.html"
                       class="button">
                        Open Books
                    </a>

                </div>


                <div class="card books material">

                    <h3>📘 Environmental Activities</h3>

                    <p>
                        CBC environmental learning materials.
                    </p>

                    <a href="cbc/books/environment.html"
                       class="button">
                        Open Books
                    </a>

                </div>

            </div>

        </div>

    </section>

</div>


<!-- FOOTER -->

<footer>

    <h3>📚 Mocha Learning Materials</h3>

    <p>Learn • Read • Practice • Succeed</p>

    <p>© 2026 Mocha Learning Materials</p>

</footer>


<!-- SEARCH SCRIPT -->

<script>

function searchMaterials() {

    let search =
        document.getElementById("searchBox")
        .value
        .toLowerCase();

    let materials =
        document.querySelectorAll(".material");

    materials.forEach(function(card) {

        let content =
            card.innerText.toLowerCase();

        if (content.includes(search)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}

</script>

</body>
</html>
