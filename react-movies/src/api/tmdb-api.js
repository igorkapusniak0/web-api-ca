// export const getMovies = () => {
//   console.log("key="+process.env.REACT_APP_TMDB_KEY)
//   return fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       return response.json().then((error) => {
//         throw new Error(error.status_message || "Something went wrong");
//       });
//     }
//     return response.json();
//   })
//   .catch((error) => {
//       throw error
//   });
// };

// export const getUpcoming = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       return response.json().then((error) => {
//         throw new Error(error.status_message || "Something went wrong");
//       });
//     }
//     return response.json();
//   })
//   .catch((error) => {
//       throw error
//   });
// };

// export const getTopRated = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       return response.json().then((error) => {
//         throw new Error(error.status_message || "Something went wrong");
//       });
//     }
//     return response.json();
//   })
//   .catch((error) => {
//       throw error
//   });
// };


// export const getMovie = (args) => {
//   //console.log(args)
//   const [, idPart] = args.queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`,
    
//   ).then((response) => {
//     if (!response.ok) {
//       return response.json().then((error) => {
//         throw new Error(error.status_message || "Something went wrong");
//       });
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//  });
// };

// export const getMovieProviders = (args) => {
//   //console.log(args)
//   const [, idPart] = args.queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   ).then((response) => {
//     if (!response.ok) {
//       return response.json().then((error) => {
//         throw new Error(error.status_message || "Something went wrong");
//       });
//     }
//     console.log(response)
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//  });
// };

// export const getShow = (args) => {
//   //console.log(args)
//   const [, idPart] = args.queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   ).then((response) => {
//     if (!response.ok) {
//       return response.json().then((error) => {
//         throw new Error(error.status_message || "Something went wrong");
//       });
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//  });
// };

// export const getShowProviders = (args) => {
//   //console.log(args)
//   const [, idPart] = args.queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   ).then((response) => {
//     if (!response.ok) {
//       return response.json().then((error) => {
//         throw new Error(error.status_message || "Something went wrong");
//       });
//     }
//     console.log(response)
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//  });
// };
  
//   export const getGenres = () => {
//     return fetch(
//       "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
//         process.env.REACT_APP_TMDB_KEY +
//         "&language=en-US"
//     ).then( (response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//    });
//   };

//   export const getGenresShow = () => {
//     return fetch(
//       "https://api.themoviedb.org/3/genre/tv/list?api_key=" +
//         process.env.REACT_APP_TMDB_KEY +
//         "&language=en-US"
//     ).then( (response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//    });
//   };

  
//   export const getMovieImages = ({ queryKey }) => {
//     const [, idPart] = queryKey;
//     const { id } = idPart;
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then( (response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//    });
//   };

//   export const getShowImages = ({ queryKey }) => {
//     const [, idPart] = queryKey;
//     const { id } = idPart;
//     return fetch(
//       `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then( (response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//    });
//   };

  

//   export const getMovieReviews = ({ queryKey }) => {
//     const [, idPart] = queryKey;
//     const { id } = idPart;
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then( (response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//    });
//   };

//   export const getShowReviews = ({ queryKey }) => {
//     const [, idPart] = queryKey;
//     const { id } = idPart;
//     return fetch(
//       `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then( (response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//    });
//   };


//   export const getShows = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
//     ).then((response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//         throw error
//     });
//   };
  
//   export const getUpcomingShows = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
//     ).then((response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//         throw error
//     });
//   };

//   export const getTopRatedShows = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
//     ).then((response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//         throw error
//     });
//   };

//   export const getSimilarMovies = (id) => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`
//     ).then((response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json(); 
//     })
//     .catch((error) => {
//       throw error; 
//     });
//   };

//   export const getSimilarShows = (id) => {
//     return fetch(
//       `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`
//     ).then((response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json(); 
//     })
//     .catch((error) => {
//       throw error; 
//     });
//   };

//   export const getMovieCast = (id) => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then((response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//         throw error
//     });
//   };

//   export const getShowCast = (id) => {
//     return fetch(
//       `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then((response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//         throw error
//     });
//   };

//   export const getActorMovies = (id) => {
//     return fetch(

//       `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then((response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//         throw error
//     });
//   };
//   export const getActorShows = (id) => {
//     return fetch(

//       `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then((response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//         throw error
//     });
//   };


  
//   export const getActorImages = (id) => {
//     return fetch(

//       `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then((response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//         throw error
//     });
//   };

//   export const getActor = (args) => {
//     const [, idPart] = args.queryKey;
//     const { id } = idPart;
//     return fetch(
//       `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then((response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//    });
//   };

//   export const getMovieTrailer = (args) => {
//     const [, idPart] = args.queryKey;
//     const { id } = idPart;
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then((response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//    });
//   };

//   export const getShowTrailer = (args) => {
//     const [, idPart] = args.queryKey;
//     const { id } = idPart;
//     return fetch(
//       `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then((response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//    });
//   };

//------------------------------------------------------------------------------

export const getUpcoming = async () => {
  const response = await fetch('http://localhost:8080/api/movies/tmdb/upcoming');
  return response.json();
};

export const getGenres = async () => {
  const response = await fetch('http://localhost:8080/api/movies/tmdb/genres');
  return response.json();
};

export const getMovies = async () => {
  const response = await fetch('http://localhost:8080/api/movies/tmdb/movies');
  return response.json();
};

export const getTopRated = async () => {
  const response = await fetch('http://localhost:8080/api/movies/tmdb/topRated');
  return response.json();
};

export const getMovie = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  console.log("id", id);
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/movie/${id}`);
  return response.json();
};

export const getMovieProviders = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/movieProviders/${id}`);
  return response.json();
};

export const getShow = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/show/${id}`);
  return response.json();
};

export const getShowProviders = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/showProviders/${id}`);
  return response.json();
};

export const getGenresShow = async () => {
  const response = await fetch('http://localhost:8080/api/movies/tmdb/genreShow');
  return response.json();
};

export const getMovieImages = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/movieImages/${id}`);
  return response.json();
};

export const getShowImages = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/showImages/${id}`);
  return response.json();
};

export const getMovieReviews = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/movieReviews/${id}`);
  return response.json();
};

export const getShowReviews = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/showReviews/${id}`);
  return response.json();
};

export const getShows = async () => {
  const response = await fetch('http://localhost:8080/api/movies/tmdb/shows');
  return response.json();
};

export const getUpcomingShows = async () => {
  const response = await fetch('http://localhost:8080/api/movies/tmdb/upcomingShows');
  return response.json();
};

export const getTopRatedShows = async () => {
  const response = await fetch('http://localhost:8080/api/movies/tmdb/topRatedShows');
  return response.json();
};

export const getSimilarMovies = async (id) => {
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/similarMovies/${id}`);
  return response.json();
};

export const getSimilarShows = async (id) => {
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/similarShows/${id}`);
  return response.json();
};

export const getMovieCast = async (id) => {
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/movieCast/${id}`);
  return response.json();
};

export const getShowCast = async (id) => {
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/showCast/${id}`);
  return response.json();
};

export const getActor = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/actor/${id}`);
  return response.json();
};

export const getActorImages = async (id) => {
  
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/actorImages/${id}`);
  return response.json();
};

export const getActorMovies = async (id) => {
 
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/actorMovies/${id}`);
  return response.json();
};

export const getActorShows = async (id) => {
  
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/actorShows/${id}`);
  return response.json();
};

export const getMovieTrailer = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/movieTrailer/${id}`);
  return response.json();
};

export const getShowTrailer = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/showTrailer/${id}`);
  return response.json();
};
