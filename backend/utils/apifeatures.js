class ApiFeatures{
    constructor(query,queryStr){
        this.queryStr = queryStr; // New 
        this.query = query;
    }
    search(){
        const keyword = this.queryStr.keyword ? {
             name :{
                 $regex:this.queryStr.keyword,
                 $options: "i",
             },
        }:{};
       // console.log(keyword);
        this.query = this.query.find({...keyword});
        return this;
    }
    filter(){
        const queryCopy ={... this.queryStr}
       
        //removing  field category

         const removeFields =["keyword","page","linit"];
         removeFields.forEach(key=>delete queryCopy[key]);


         // Filter For Price & Rating
         console.log(queryCopy);

         let queryStr = JSON.stringify(queryCopy);
         queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g,key=>`$${key}`);
         this.query = this.query.find(JSON.parse(queryStr));

         console.log(queryStr);
         return this;
    }
    pagination(resultPerpage)
    {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultPerpage * (currentPage -1);
        this.query =this.query.limit(resultPerpage).skip(skip);
        return this;
    }
};
module.exports = ApiFeatures