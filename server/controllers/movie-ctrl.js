// อันนี้คือสร้างไว้เฉยๆอยู่ ยังไม่เรียกใช้ที จะถูกเรียกใช้ใน movie-router.js


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
                    return res.status(200).json({
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
    // DELETE
deleteMovie = async(req, res) => {
    await Movie.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    error: err
                })
            }
            if (!movie) {
                return res.status(404).json({
                    success: false,
                    error: `หนังไม่เจอเด้`
                })
            }
            return res.status(200).json({
                success: true,
                data: movie
            })
        })
        .catch(err => console.log(err))
}

// GET BY ID 
getMovieById = async(req, res) => {
    await Movie.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!movie) {
            return res.status(404).json({ success: false, error: `หาไม่เจอเด้หนังอั้ล` })
        }
        return res.status(200).json({ success: true, data: movie })
    }).catch(err = console.log(err))
}

//GET ALL
getMovie = async(req, res) => {

    await Movie.find({}, (err, movies) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        if (!movies.length) {
            return res.status(404).json({
                status: false,
                error: `หาหนังไม่เจอเด้`
            })
        }
        return res.status(200).json({
            status: true,
            data: movies
        })
    }).catch(err => console.log(err))
}


module.exports = {
    createMovie,
    updateMovie,
    deleteMovie,
    getMovie,
    getMovieById
}