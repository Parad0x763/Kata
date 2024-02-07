/*JavaScript funciton to send who likes a post on button click*/

function likes(names) {
   
    if (names.length === 0) { //base case
      return "no one likes this";
    } else {
      let likeCount = 0;
      while (likeCount < names.length) {
        likeCount++;
      }
      if (likeCount === 1) {
        return names[0] + " likes this";
      } else if (likeCount === 2) {
        return names[0] + " and " + names[1] + " like this";
      } else if (likeCount === 3) {
        let likes = names[0] + ", " + names[1] 
          + " and " + names[2] + " like this";
        return likes;
      } else {
        return names[0] + ", " + names[1] + " and " + (likeCount - 2) + " others like this";
      }
    }
  }