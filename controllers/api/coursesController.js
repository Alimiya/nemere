const Course = require('../../models/courseModel')

// GET /courses
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({}, { __v: 0, _id: 0 })
        res.json(courses)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses' })
    }
}

// GET /courses/{id}
exports.getCourseById = async (req, res) => {
    const { id } = req.params
    try {
        const course = await Course.findById(id, { __v: 0, _id: 0 })
        if (course) {
            res.json(course)
        } else {
            res.status(404).json({ error: 'Course not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch course' })
    }
}

// POST /courses
exports.createCourse = async (req, res) => {
    const { title, description, pdf, user_id, price, direction, createdAt } = req.body
    try {
        const newCourse = await Course.create({
            title,
            description,
            pdf,
            user_id,
            price,
            direction,
            createdAt
        })
        res.status(201).json(newCourse)
    } catch (error) {
        res.status(500).json({ error: 'Failed to create course' })
    }
}

// PUT /courses/{id}
exports.updateCourseById = async (req, res) => {
    const { id } = req.params
    const { title, description, pdf, user_id, price, direction, createdAt } = req.body
    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            id,
            {
                title,
                description,
                pdf,
                user_id,
                price,
                direction,
                createdAt
            },
            { new: true, projection: { __v: 0, _id: 0 } }
        )
        if (updatedCourse) {
            res.json(updatedCourse)
        } else {
            res.status(404).json({ error: 'Course not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update course' })
    }
}

// DELETE /courses/{id}
exports.deleteCourseById = async (req, res) => {
    const { id } = req.params
    try {
        const deletedCourse = await Course.findByIdAndDelete(id)
        if (deletedCourse) {
            res.json({ message: 'Course deleted successfully' })
        } else {
            res.status(404).json({ error: 'Course not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete course' })
    }
}