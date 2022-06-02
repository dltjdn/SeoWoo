import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { MovieCommentCreateDto } from "../interfaces/movie/MovieCommentCreateDto";
import { MovieCreateDto } from "../interfaces/movie/MovieCreateDto";
import { MovieCommentInfo, MovieInfo } from "../interfaces/movie/MovieInfo";
import { MovieResponseDto } from "../interfaces/movie/MovieResponseDto";
import { MovieCommentUpdateDto } from "../interfaces/movie/MovieCommentUpdateDto";
import Movie from "../models/Movie";
import { MovieOptionType } from "../interfaces/movie/MovieOptionType";



const createMovie = async (movieCreateDto: MovieCreateDto): Promise<PostBaseResponseDto> => {
    try {
        const movie = new Movie(movieCreateDto);

        await movie.save();

        const data = {
            _id: movie._id
        };

        return data;

    } catch (error) {
        console.log(error);
        throw error;
    }
}


const createMovieComment = async (movieId: string, movieCommentCreateDto: MovieCommentCreateDto): Promise<MovieInfo | null> => {
    try {
        const movie = await Movie.findById(movieId);
        if (!movie) return null;

        const newComments: MovieCommentInfo[] = [...movie.comments, movieCommentCreateDto];

        const updatedMovie = await Movie.findOneAndUpdate({ _id: movieId }, { comments: newComments }, { new: true });
        // new: true => 
        if (!updatedMovie) return null;

        return updatedMovie;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getMovie = async (movieId: string): Promise<MovieResponseDto | null> => {
    try {
        const movie = await Movie.findById(movieId).populate('comments.writer');
        if (!movie) return null;
        return movie;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateMovieComment = async (movieId: string, commentId: string, userId: string, movieCommentUpdateDto: MovieCommentUpdateDto): Promise<MovieInfo | null> => {
    try {
        const movie = await Movie.findById(movieId);
        if (!movie) return null;


        const data = await Movie.findOneAndUpdate(
            { _id: movieId, comments: { $elemMatch: { _id: commentId, writer: userId } } },
            {
                $set: {
                    'comments.$.writer': userId,
                    'comments.$.comment': movieCommentUpdateDto.comment
                }
            },
            { new: true }
        );

        return data;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getMovieBySearch = async (search: string, option: MovieOptionType): Promise<MovieInfo[]> => {
    const regex = (pattern: string) => new RegExp(`.*${pattern}.*`);
    try {
        const titleRegex: RegExp = regex(search);

        let movies: MovieInfo[] = [];

        if (option === 'title') {
            movies = await Movie.find({ title: { $regex: titleRegex } });

        } else if (option === 'director') {
            movies = await Movie.find({ director: { $regex: titleRegex } });

        } else {
            movies = await Movie.find({
                $or: [
                    { title: { $regex: titleRegex } },
                    { director: { $regex: titleRegex } }
                ]
            });
        }

        return movies;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    createMovie,
    createMovieComment,
    getMovie,
    updateMovieComment,
    getMovieBySearch
}