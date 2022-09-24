let jobs = 
[
    {
        place: "SPACE X",
        year: "2020-2022",
        title: "ROCKET ENGINEER",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quasi architecto repudiandae dicta, tenetur ducimus perspiciatis totam non id maiores nulla saepe rerum labore obcaecati."
    },
    {
        place: "NEURALINK CORP.",
        year: "2017-2020",
        title: "PROJECT LEAD",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni iusto doloremque modi! Temporibus asperiores, commodi rerum harum aperiam ab, quae nam iste neque ipsum amet quaerat veniam quis dignissimos? Deleniti porro blanditiis quod quisquam explicabo?"
    },
    {
        place: "TESLA",
        year: "2014-2017",
        title: "HEAD OF FACTORY",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum perspiciatis deserunt expedita laborum possimus, commodi dolorum eveniet tempora dolor."
    },
    {
        place: "SOLAR CITY",
        year: "2010-2014",
        title: "BUSINESS DEVELOPER",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos saepe libero cum maxime dicta veniam, maiores repellat voluptates quibusdam, earum nostrum, dolorem delectus mollitia eligendi perferendis neque iusto expedita assumenda eaque suscipit officiis eos non illo dolorum! Necessitatibus ullam, eius voluptates cum doloribus ut sequi ipsam nulla reiciendis magni vero!"
    }
]

function LoadWorkData() {
    let result = '<div class="data-container">';
    for(let i = 0; i < jobs.length; i++)
    {
        result += '<div class="data-object padding"><div class="col-1"><h3>';
        result += jobs[i].place + '</h3><p>' + jobs[i].year + '</p></div><div class="col-2"><h3>';
        result += jobs[i].title + '</h3><p>' + jobs[i].description + '</p></div></div>'
    }
    result += '</div>';

    document.getElementById("work-data").innerHTML = result;
}
function RemoveWorkData() {
    let result = "";
    document.getElementById("work-data").innerHTML = result;
}

let courses = 
[
    {
        place: "HARVARD",
        year: "2000-2005",
        title: "ROCKET SCIENCE",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat soluta expedita voluptatum aut cumque eveniet dolores veniam maxime delectus aliquid, illum repellendus quasi error autem eius iusto eum dicta! Minima, ea aliquam maiores soluta repudiandae, tenetur recusandae, explicabo dolorem rerum voluptatum eveniet. Ad, quaerat."
    },
    {
        place: "M.I.T",
        year: "2005-2008",
        title: "CRYPTOGRAPHY",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere necessitatibus, exercitationem vitae et aliquam recusandae quaerat corrupti tempore aut. Iusto, soluta. Culpa rem minima dolorum iusto impedit voluptatem molestiae ipsa."
    },
    {
        place: "STANFORD",
        year: "2008-2011",
        title: "MATHEMATICS",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed porro reprehenderit quidem saepe iure error id non quam omnis, quae optio repellat corrupti distinctio quasi sapiente ab sunt."
    },
    {
        place: "CAMBRIDGE",
        year: "2011-2014",
        title: "LAW",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum architecto assumenda fugit autem dolor facere aliquid ipsa impedit nisi, deserunt placeat velit."
    },
]

function LoadEducationData() {
    let result = '<div class="data-container">';
    for(let i = 0; i < courses.length; i++)
    {
        result += '<div class="data-object padding"><div class="col-1"><h3>';
        result += courses[i].place + '</h3><p>' + courses[i].year + '</p></div><div class="col-2"><h3>';
        result += courses[i].title + '</h3><p>' + courses[i].description + '</p></div></div>'
    }
    result += '</div>';

    document.getElementById("education-data").innerHTML = result;
}
function RemoveEducationData() {
    let result = "";
    document.getElementById("education-data").innerHTML = result;
}