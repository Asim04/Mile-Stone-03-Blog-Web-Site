import { defineField, defineType, defineArrayMember } from "sanity"

export const blog = defineField( {
    name:"blogs",
    title:"blog",
    type:"document",

    fields: [

        defineField({
            name:"title",
            type:"string",
            title:"Title"
        }),

        defineField({
            name:"para",
            type:"text",
            title:"paragraph",
    
        }),

        defineField({

            name: "slug",
            type: "slug" , 
            title: "Slug",

            options:{

                source: "title"  
            }
        }),

        defineField({

            name:"image",
            type:"image",
            title:"Image",

            options:{
                hotspot:true
            }
        }),

        defineField({

            name:"blog",
            type:"array",
            title:"Blog",
            of: [{type:"block"}]
        })
        
    ]
}
)