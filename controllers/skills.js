import { Skill } from '../models/skill.js'
// import { skills } from '../data/skills-data.js'

function index(req, res) {
    Skill.find({})
    .then(skills => {
        res.render('skills/index', {
            skills: skills
    })
})
    .catch(error => {
        console.log(error)
        res.redirect('/')
    })
}

export {
    index
}