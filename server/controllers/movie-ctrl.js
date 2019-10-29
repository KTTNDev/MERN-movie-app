// ประกาศตัวแปรเรียกใช้ movie-model
const Movie = require('../models/movie-model')
    // สร้าง func createMovie มีตัวแปร req , res
createMovie = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
                success: false,
                error: 'ใส่หนังด้วย',
            }) //END IF
    }


    const movie = new Movie(body)

    if (!movie) {
        return res.status(400).json({ success: false, error: err })
    }

    movie
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: "จัดเก็บหนังเเล้ว"
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: "หนังไม่ถูกจัดเก็บ"
            })
        })

}

// UPDATE 
updateMovie = async(req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: "ระบุเนื้อหาที่ต้องการแก้ไข"
        })
    }

    Movie.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'หาหนังไม่เจอเด้'
            })
        }

        movie.name = body.name
        movie.time = body.time
        movie.rating = body.rating
        movie
            .save()
            .then(() => {
                return res(201).json({
                    success: true,
                    id: movie._id,
                    message: "อับเดตเรียบร้อยแล้ว",
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'อับเดตผิดพลาด!',
                })
            })

    })
}