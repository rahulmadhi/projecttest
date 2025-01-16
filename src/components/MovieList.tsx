import React, { useEffect, useState } from 'react';
import { ThumbsUp, Eye, Calendar, Users } from 'lucide-react';
import { Movie } from '../types';
import toast from 'react-hot-toast';

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rawResponse, setRawResponse] = useState<any>(null);
  const [showJson, setShowJson] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/api/api/movieList', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            category: 'movies',
            language: 'kannada',
            genre: 'all',
            sort: 'voting'
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setRawResponse(data);
        
        if (!data.result || !Array.isArray(data.result)) {
          throw new Error('Invalid data format received from server');
        }

        setMovies(data.result);
        setError(null);
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Failed to fetch movies';
        setError(message);
        toast.error('Unable to load movies. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Unable to Load Movies</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Movie List</h1>
        <button
          onClick={() => setShowJson(!showJson)}
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {showJson ? 'Show Movies' : 'Show JSON'}
        </button>
      </div>

      {showJson ? (
        <div className="bg-gray-900 rounded-lg p-6 overflow-auto">
          <pre className="text-green-400 text-sm whitespace-pre-wrap">
            {JSON.stringify(rawResponse, null, 2)}
          </pre>
        </div>
      ) : (
        <div className="space-y-6">
          {movies.map((movie) => (
            <div key={movie._id} className="bg-white shadow rounded-lg p-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-48 h-72 object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{movie.title}</h2>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span>Director: {movie.director.join(', ')}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span>Starring: {movie.stars.join(', ')}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>Released: {new Date(movie.releasedDate).toLocaleDateString()}</span>
                    </p>
                    <div className="flex items-center gap-6 mt-4">
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="w-5 h-5 text-indigo-600" />
                        <span>{movie.totalVoted} votes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-indigo-600" />
                        <span>{movie.pageViews} views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}