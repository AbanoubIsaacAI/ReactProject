// import React from "react";
// import { FaStar } from "react-icons/fa";

// const Reviews = ({
//     activeTab,
//     setActiveTab,
//     product,
//     rating,
//     comment,
//     setComment,
//     ratingSubmitted,
//     commentSubmitted,
//     handleReviewSubmit,
//     setRating
// }) => {
//     return (
//         <>
//             {/* Tab navigation */}
//             <div className="mt-6 flex space-x-8 justify-center">
//                 <button
//                     className={`px-6 py-3 text-sm font-semibold cursor-pointer rounded-full transition-all duration-300 transform ${activeTab === "description"
//                         ? "bg-yellow-600 text-white shadow-lg"
//                         : "bg-gray-100 text-gray-800 hover:bg-yellow-200"
//                         }`}
//                     onClick={() => setActiveTab("description")}
//                 >
//                     Description
//                 </button>
//                 <button
//                     className={`px-6 py-3 text-sm font-semibold cursor-pointer rounded-full transition-all duration-300 transform ${activeTab === "reviews"
//                         ? "bg-yellow-600 text-white shadow-lg"
//                         : "bg-gray-100 text-gray-800 hover:bg-yellow-200"
//                         }`}
//                     onClick={() => setActiveTab("reviews")}
//                 >
//                     Reviews
//                 </button>
//             </div>

//             {/* Description Tab */}
//             {activeTab === "description" && (
//                 <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-xl">
//                     <h4 className="font-bold text-2xl text-gray-800 mb-4">Description</h4>
//                     <p className="text-gray-700">{product?.description || "No description available."}</p>
//                 </div>
//             )}

//             {/* Reviews Tab */}
//             {activeTab === "reviews" && (
//                 <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-xl">
//                     <h4 className="font-bold text-2xl text-gray-800 mb-6">Reviews</h4>

//                     {/* Display Reviews */}
//                     {product?.reviews && Array.isArray(product.reviews) && product.reviews.length > 0 ? (
//                         product.reviews.map((review, index) => (
//                             <div key={index} className="mb-6 pb-6 border-b border-gray-200">
//                                 <div className="flex items-center mb-3">
//                                     <div className="flex text-yellow-500">
//                                         {[1, 2, 3, 4, 5].map((star) => (
//                                             <FaStar
//                                                 key={star}
//                                                 size={22}
//                                                 color={star <= review.rating ? "gold" : "gray"}
//                                             />
//                                         ))}
//                                     </div>
//                                     <strong className="text-gray-800 text-lg ml-3">{review.username}</strong>
//                                 </div>
//                                 <p className="text-gray-700 text-lg">{review.comment}</p>
//                             </div>
//                         ))
//                     ) : (
//                         <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500">
//                         <strong>No comments yet</strong>
//                     </div>
//                     )}

//                     {/* Review Form */}
//                     <form onSubmit={handleReviewSubmit}>
//                         {!ratingSubmitted && (
//                             <div className="mb-6">
//                                 <label className="block text-sm font-semibold text-gray-700 mb-3">Rate this product</label>
//                                 <div className="flex space-x-2">
//                                     {[1, 2, 3, 4, 5].map((star) => (
//                                         <FaStar
//                                             key={star}
//                                             size={30}
//                                             color={star <= rating ? "gold" : "gray"}
//                                             onClick={() => {
//                                                 if (!ratingSubmitted) setRating(star);
//                                             }}
//                                             className="cursor-pointer transition-all duration-300 hover:scale-110"
//                                         />
//                                     ))}
//                                 </div>
//                             </div>
//                         )}

//                         <div className="mb-6">
//                             <label className="block text-sm font-semibold text-gray-700 mb-3">Your Review</label>
//                             <textarea
//                                 className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 text-gray-800 placeholder:text-gray-500" // Adjusted placeholder color to a softer gray
//                                 rows="4"
//                                 value={comment}
//                                 onChange={(e) => setComment(e.target.value)}
//                                 placeholder="Write your review here..."
//                                 disabled={ratingSubmitted && commentSubmitted}
//                             />
//                         </div>
//                         <button
//                             className={`w-48 py-2.5 text-sm bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform mx-auto block cursor-pointer ${ratingSubmitted && comment.trim() === ""
//                                     ? "opacity-50 cursor-not-allowed"
//                                     : "hover:bg-yellow-500"
//                                 }`}
//                             type="submit"
//                             disabled={ratingSubmitted && comment.trim() === ""}
//                         >
//                             {(ratingSubmitted && commentSubmitted) ? "Review Submitted" : "Submit Review"}
//                         </button>



//                     </form>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Reviews;
//////////////
// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

// const Reviews = ({
//   activeTab,
//   setActiveTab,
//   product,
//   rating,
//   comment,
//   setComment,
//   ratingSubmitted,
//   commentSubmitted,
//   handleReviewSubmit,
//   setRating,
//   isLoggedIn // Pass isLoggedIn as a prop (or use context)
// }) => {
//   const navigate = useNavigate(); // Initialize navigate

//   return (
//     <>
//       {/* Tab navigation */}
//       <div className="mt-6 flex space-x-8 justify-center">
//         <button
//           className={`px-6 py-3 text-sm font-semibold cursor-pointer rounded-full transition-all duration-300 transform ${
//             activeTab === "description"
//               ? "bg-yellow-600 text-white shadow-lg"
//               : "bg-gray-100 text-gray-800 hover:bg-yellow-200"
//           }`}
//           onClick={() => setActiveTab("description")}
//         >
//           Description
//         </button>
//         <button
//           className={`px-6 py-3 text-sm font-semibold cursor-pointer rounded-full transition-all duration-300 transform ${
//             activeTab === "reviews"
//               ? "bg-yellow-600 text-white shadow-lg"
//               : "bg-gray-100 text-gray-800 hover:bg-yellow-200"
//           }`}
//           onClick={() => setActiveTab("reviews")}
//         >
//           Reviews
//         </button>
//       </div>

//       {/* Description Tab */}
//       {activeTab === "description" && (
//         <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-xl">
//           <h4 className="font-bold text-2xl text-gray-800 mb-4">Description</h4>
//           <p className="text-gray-700">{product?.description || "No description available."}</p>
//         </div>
//       )}

//       {/* Reviews Tab */}
//       {activeTab === "reviews" && (
//         <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-xl">
//           <h4 className="font-bold text-2xl text-gray-800 mb-6">Reviews</h4>

//           {/* Display Reviews */}
//           {product?.reviews && Array.isArray(product.reviews) && product.reviews.length > 0 ? (
//             product.reviews.map((review, index) => (
//               <div key={index} className="mb-6 pb-6 border-b border-gray-200">
//                 <div className="flex items-center mb-3">
//                   <div className="flex text-yellow-500">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <FaStar
//                         key={star}
//                         size={22}
//                         color={star <= review.rating ? "gold" : "gray"}
//                       />
//                     ))}
//                   </div>
//                   <strong className="text-gray-800 text-lg ml-3">{review.username}</strong>
//                 </div>
//                 <p className="text-gray-700 text-lg">{review.comment}</p>
//               </div>
//             ))
//           ) : (
//             <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500">
//               <strong>No comments yet</strong>
//             </div>
//           )}

//           {/* Review Form */}
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               if (!isLoggedIn) {
//                 alert("You must be logged in to submit a review");
//                 navigate("/login");
//                 return;
//               }
//               handleReviewSubmit();
//             }}
//           >
//             {/* Rating Section */}
//             {!ratingSubmitted && isLoggedIn && (
//               <div className="mb-6">
//                 <label className="block text-sm font-semibold text-gray-700 mb-3">
//                   Rate this product
//                 </label>
//                 <div className="flex space-x-2">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <FaStar
//                       key={star}
//                       size={30}
//                       color={star <= rating ? "gold" : "gray"}
//                       onClick={() => {
//                         if (!ratingSubmitted) setRating(star);
//                       }}
//                       className="cursor-pointer transition-all duration-300 hover:scale-110"
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Comment Section */}
//             <div className="mb-6">
//               <label className="block text-sm font-semibold text-gray-700 mb-3">
//                 Your Review
//               </label>
//               <textarea
//                 className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 text-gray-800 placeholder:text-gray-500"
//                 rows="4"
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//                 placeholder="Write your review here..."
//                 disabled={ratingSubmitted && commentSubmitted}
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               className={`w-48 py-2.5 text-sm bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform mx-auto block cursor-pointer ${
//                 ratingSubmitted && comment.trim() === ""
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-yellow-500"
//               }`}
//               type="submit"
//               disabled={ratingSubmitted && comment.trim() === ""}
//             >
//               {ratingSubmitted && commentSubmitted
//                 ? "Review Submitted"
//                 : "Submit Review"}
//             </button>
//           </form>
//         </div>
//       )}
//     </>
//   );
// };

// export default Reviews;
///////////
// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { useNavigate, Link } from "react-router-dom";
// const Reviews = ({
//   activeTab,
//   setActiveTab,
//   product,
//   rating,
//   comment,
//   setComment,
//   ratingSubmitted,
//   commentSubmitted,
//   handleReviewSubmit,
//   setRating,
//   isLoggedIn // Pass isLoggedIn as a prop, or you can use context instead
// }) => {
//   const navigate = useNavigate(); // Initialize the navigate function

//   return (
//     <>
//       {/* Tab navigation */}
//       <div className="mt-6 flex space-x-8 justify-center">
//         <button
//           className={`px-6 py-3 text-sm font-semibold cursor-pointer rounded-full transition-all duration-300 transform ${activeTab === "description"
//             ? "bg-yellow-600 text-white shadow-lg"
//             : "bg-gray-100 text-gray-800 hover:bg-yellow-200"
//             }`}
//           onClick={() => setActiveTab("description")}
//         >
//           Description
//         </button>
//         <button
//           className={`px-6 py-3 text-sm font-semibold cursor-pointer rounded-full transition-all duration-300 transform ${activeTab === "reviews"
//             ? "bg-yellow-600 text-white shadow-lg"
//             : "bg-gray-100 text-gray-800 hover:bg-yellow-200"
//             }`}
//           onClick={() => setActiveTab("reviews")}
//         >
//           Reviews
//         </button>
//       </div>

//       {/* Description Tab */}
//       {activeTab === "description" && (
//         <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-xl">
//           <h4 className="font-bold text-2xl text-gray-800 mb-4">Description</h4>
//           <p className="text-gray-700">{product?.description || "No description available."}</p>
//         </div>
//       )}

//       {/* Reviews Tab */}
//       {activeTab === "reviews" && (
//         <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-xl">
//           <h4 className="font-bold text-2xl text-gray-800 mb-6">Reviews</h4>

//           {/* Display Reviews */}
//           {product?.reviews && Array.isArray(product.reviews) && product.reviews.length > 0 ? (
//             product.reviews.map((review, index) => (
//               <div key={index} className="mb-6 pb-6 border-b border-gray-200">
//                 <div className="flex items-center mb-3">
//                   <div className="flex text-yellow-500">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <FaStar
//                         key={star}
//                         size={22}
//                         color={star <= review.rating ? "gold" : "gray"}
//                       />
//                     ))}
//                   </div>
//                   <strong className="text-gray-800 text-lg ml-3">{review.username}</strong>
//                 </div>
//                 <p className="text-gray-700 text-lg">{review.comment}</p>
//               </div>
//             ))
//           ) : (
//             <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500">
//               <strong>No comments yet</strong>
//             </div>
//           )}

//           {/* Review Form */}
//           <form
//             onSubmit={(e) => {
//               e.preventDefault(); // Prevent default form submission
//               // Check if user is logged in before submitting review
//               if (!isLoggedIn) {
//                 alert("You must be logged in to submit a review");
//                 // navigate("/login"); // Redirect to the login page if not logged in
//                 return;
//               }
//               handleReviewSubmit();
//             }}
//           >
//             {/* If not logged in, display an information message */}
//             {!isLoggedIn && (
//               <div className="mt-4 p-4 bg-red-100 text-red-800 border-l-4 border-red-500">
//                 <strong>You must be logged in to submit a review. <Link to="/login" className="font-bold text-blue-700 hover:underline">
//               LOGIN
//             </Link></strong>
//               </div>
//             )}

//             {/* Rate the product */}
//             {!ratingSubmitted && isLoggedIn && (
//               <div className="mb-6">
//                 <label className="block text-sm font-semibold text-gray-700 mb-3">Rate this product</label>
//                 <div className="flex space-x-2">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <FaStar
//                       key={star}
//                       size={30}
//                       color={star <= rating ? "gold" : "gray"}
//                       onClick={() => {
//                         if (!ratingSubmitted) setRating(star);
//                       }}
//                       className="cursor-pointer transition-all duration-300 hover:scale-110"
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Review text area */}
//             <div className="mb-6">
//               <label className="block text-sm font-semibold text-gray-700 mb-3">Your Review</label>
//               <textarea
//                 className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 text-gray-800 placeholder:text-gray-500"
//                 rows="4"
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//                 placeholder="Write your review here..."
//                 disabled={ratingSubmitted && commentSubmitted}
//               />
//             </div>

//             <button
//               className={`w-48 py-2.5 text-sm bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform mx-auto block cursor-pointer ${ratingSubmitted && comment.trim() === ""
//                 ? "opacity-50 cursor-not-allowed"
//                 : "hover:bg-yellow-500"
//                 }`}
//               type="submit"
//               disabled={ratingSubmitted && comment.trim() === ""}
//             >
//               {(ratingSubmitted && commentSubmitted) ? "Review Submitted" : "Submit Review"}
//             </button>
//           </form>
//         </div>
//       )}
//     </>
//   );
// };

// export default Reviews;
///////////
// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { useNavigate, Link } from "react-router-dom";
// import { UserContext } from './User';
// const Reviews = ({
//   activeTab,
//   setActiveTab,
//   product,
//   rating,
//   comment,
//   setComment,
//   ratingSubmitted,
//   commentSubmitted,
//   handleReviewSubmit,
//   setRating,
//   isLoggedIn,
//   username, // ⬅️ استقبل اسم المستخدم هنا
// }) => {
//   const navigate = useNavigate();

//   return (
//     <>
//       {/* Tab Navigation */}
//       <div className="mt-6 flex space-x-8 justify-center">
//         <button
//           className={`px-6 py-3 text-sm font-semibold cursor-pointer rounded-full transition-all duration-300 transform ${activeTab === "description"
//               ? "bg-yellow-600 text-white shadow-lg"
//               : "bg-gray-100 text-gray-800 hover:bg-yellow-200"
//             }`}
//           onClick={() => setActiveTab("description")}
//         >
//           Description
//         </button>
//         <button
//           className={`px-6 py-3 text-sm font-semibold cursor-pointer rounded-full transition-all duration-300 transform ${activeTab === "reviews"
//               ? "bg-yellow-600 text-white shadow-lg"
//               : "bg-gray-100 text-gray-800 hover:bg-yellow-200"
//             }`}
//           onClick={() => setActiveTab("reviews")}
//         >
//           Reviews
//         </button>
//       </div>

//       {/* Description Tab */}
//       {activeTab === "description" && (
//         <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-xl">
//           <h4 className="font-bold text-2xl text-gray-800 mb-4">Description</h4>
//           <p className="text-gray-700">{product?.description || "No description available."}</p>
//         </div>
//       )}

//       {/* Reviews Tab */}
//       {activeTab === "reviews" && (
//         <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-xl">
//           <h4 className="font-bold text-2xl text-gray-800 mb-6">Reviews</h4>

//           {/* Existing Reviews */}
//           {product?.reviews && Array.isArray(product.reviews) && product.reviews.length > 0 ? (
//             product.reviews.map((review, index) => (
//               <div key={index} className="mb-6 pb-6 border-b border-gray-200">
//                 <div className="flex items-center mb-3">
//                   <div className="flex text-yellow-500">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <FaStar
//                         key={star}
//                         size={22}
//                         color={star <= review.rating ? "gold" : "gray"}
//                       />
//                     ))}
//                   </div>
//                   <strong className="text-gray-800 text-lg ml-3">{review.username}</strong>
//                 </div>
//                 <p className="text-gray-700 text-lg">{review.comment}</p>
//               </div>
//             ))
//           ) : (
//             <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500">
//               <strong>No comments yet</strong>
//             </div>
//           )}

//           {/* Review Form */}
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               if (!isLoggedIn) {
//                 alert("You must be logged in to submit a review");
//                 return;
//               }
//               handleReviewSubmit();
//             }}
//           >
//             {/* Not Logged In Message */}
//             {!isLoggedIn && (
//               <div className="mt-4 p-4 bg-red-100 text-red-800 border-l-4 border-red-500">
//                 <strong>
//                   You must be logged in to submit a review.{" "}
//                   <Link to="/login" className="font-bold text-blue-700 hover:underline">
//                     LOGIN
//                   </Link>
//                 </strong>
//               </div>
//             )}

//             {/* Logged In User Info */}
//             {isLoggedIn && username && (
//               <div className="text-right text-sm text-gray-600 mb-4">
//                 Logged in as:{" "}
//                 <span className="font-semibold text-yellow-700">{username}</span>
//               </div>
//             )}

//             {/* Rating Stars */}
//             {!ratingSubmitted && isLoggedIn && (
//               <div className="mb-6">
//                 <label className="block text-sm font-semibold text-gray-700 mb-3">
//                   Rate this product
//                 </label>
//                 <div className="flex space-x-2">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <FaStar
//                       key={star}
//                       size={30}
//                       color={star <= rating ? "gold" : "gray"}
//                       onClick={() => {
//                         if (!ratingSubmitted) setRating(star);
//                       }}
//                       className="cursor-pointer transition-all duration-300 hover:scale-110"
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Comment Textarea */}
//             <div className="mb-6">
//               <label className="block text-sm font-semibold text-gray-700 mb-3">
//                 Your Review
//               </label>
//               <textarea
//                 className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 text-gray-800 placeholder:text-gray-500"
//                 rows="4"
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//                 placeholder="Write your review here..."
//                 disabled={ratingSubmitted && commentSubmitted}
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               className={`w-48 py-2.5 text-sm bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform mx-auto block cursor-pointer ${ratingSubmitted && comment.trim() === ""
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-yellow-500"
//                 }`}
//               type="submit"
//               disabled={ratingSubmitted && comment.trim() === ""}
//             >
//               {(ratingSubmitted && commentSubmitted) ? "Review Submitted" : "Submit Review"}
//             </button>
//           </form>
//         </div>
//       )}
//     </>
//   );
// };

// export default Reviews;
////////////
import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from '../Pages/User';

const Reviews = ({
  activeTab,
  setActiveTab,
  product,
  rating,
  comment,
  setComment,
  ratingSubmitted,
  commentSubmitted,
  handleReviewSubmit,
  setRating,
}) => {
  const { isLoggedIn, currentUser } = useContext(UserContext); // 👈 Use context here
  const username = currentUser?.username;
  const navigate = useNavigate();

  return (
    <>
      {/* Tab Navigation */}
      <div className="mt-6 flex space-x-8 justify-center">
        <button
          className={`px-6 py-3 text-sm font-semibold cursor-pointer rounded-full transition-all duration-300 transform ${
            activeTab === "description"
              ? "bg-yellow-600 text-white shadow-lg"
              : "bg-gray-100 text-gray-800 hover:bg-yellow-200"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`px-6 py-3 text-sm font-semibold cursor-pointer rounded-full transition-all duration-300 transform ${
            activeTab === "reviews"
              ? "bg-yellow-600 text-white shadow-lg"
              : "bg-gray-100 text-gray-800 hover:bg-yellow-200"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      {/* Description Tab */}
      {activeTab === "description" && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-xl">
          <h4 className="font-bold text-2xl text-gray-800 mb-4">Description</h4>
          <p className="text-gray-700">{product?.description || "No description available."}</p>
        </div>
      )}

      {/* Reviews Tab */}
      {activeTab === "reviews" && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-xl">
          <h4 className="font-bold text-2xl text-gray-800 mb-6">Reviews</h4>

          {/* Existing Reviews */}
          {product?.reviews?.length > 0 ? (
            product.reviews.map((review, index) => (
              <div key={index} className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        size={22}
                        color={star <= review.rating ? "gold" : "gray"}
                      />
                    ))}
                  </div>
                  <strong className="text-gray-800 text-lg ml-3">{username}</strong>
                </div>
                <p className="text-gray-700 text-lg">{review.comment}</p>
              </div>
            ))
          ) : (
            <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500">
              <strong>No comments yet</strong>
            </div>
          )}

          {/* Review Form */}
                    <form onSubmit={handleReviewSubmit}>
                        {!ratingSubmitted && (
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">Rate this product</label>
                                <div className="flex space-x-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FaStar
                                            key={star}
                                            size={30}
                                            color={star <= rating ? "gold" : "gray"}
                                            onClick={() => {
                                                if (!ratingSubmitted) setRating(star);
                                            }}
                                            className="cursor-pointer transition-all duration-300 hover:scale-110"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

            {/* Logged In User Info
            {isLoggedIn && username && (
              <div className="text-right text-sm text-gray-600 mb-4">
                Logged in as:{" "}
                <span className="font-semibold text-yellow-700">{username}</span>
              </div>
            )} */}

            {/* Not Logged In Message */}
            {!isLoggedIn && (
              <div className="mt-4 p-4 bg-red-100 text-red-800 border-l-4 border-red-500">
                <strong>
                  You must be logged in to submit a review.{" "}
                  <Link to="/login" className="font-bold text-blue-700 hover:underline">
                    LOGIN
                  </Link>
                </strong>
              </div>
            )}

            
            {/* {!ratingSubmitted && isLoggedIn && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Rate this product
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      size={30}
                      color={star <= rating ? "gold" : "gray"}
                      onClick={() => !ratingSubmitted && setRating(star)}
                      className="cursor-pointer transition-all duration-300 hover:scale-110"
                    />
                  ))}
                </div>
              </div>
            )} */}

            {/* Comment Textarea */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Your Review
              </label>
              <textarea
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 text-gray-800 placeholder:text-gray-500"
                rows="4"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your review here..."
                disabled={ratingSubmitted && commentSubmitted}
              />
            </div>

            {/* Submit Button */}
            <button
  className={`w-48 py-2.5 text-sm bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform mx-auto block cursor-pointer ${
    (!isLoggedIn || (ratingSubmitted && comment.trim() === ""))
      ? "opacity-50 cursor-not-allowed"
      : "hover:bg-yellow-500"
  }`}
  type="submit"
  disabled={!isLoggedIn || (ratingSubmitted && comment.trim() === "")}
>
  {ratingSubmitted && commentSubmitted ? "Review Submitted" : "Submit Review"}
</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Reviews;