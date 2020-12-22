In this section, we can see how to validate the db fields using mongoose package.

1) How to use default validation attributes?

For example:
```
username: { 
        type: String, // field type is string
        required: true, // field required
        minlength: 5, // minimium string lenght
        maxlength: 15, // maximium string lenght
        lowercase: true, // lowercase saving string.
        uppercase: true, // uppercase saving string.
        trim: true // remove spaces and dashes from string.
        // match: /pattern/ // want to match any regex pattern on saving.
    }
```

2) How to add custom validator to field while saving data int the db.

For example:
```
// Custom validator
    isverified : {
        type: Boolean,
        validate: {
            validator: function (v){
                return type(v) === Boolean;
            },
            message: 'Please pass boolean' // custom validator message.
        }
    }
```




