var demo1 = {
  id: "1",
  title: "demo 1",
  subtitle: "",
  children: [
    {
      type: "statement",
      id: "asldassd",
      children: [
        {
          type: "header",
          children: [
            {
              text: "Hello header",
            },
          ],
        },
        {
          type: "statement",
          id: "345678",
          children: [
            {
              type: "paragraph",
              children: [
                {
                  text: "content here",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

var demo2 = {
  id: "2",
  title: "demo 2",
  subtitle: "",
  children: [
    {
      type: "list",
      children: [
        {
          type: "header",
          id: "24029842",
          children: [
            {
              type: "headerText",
              children: [
                {
                  text: "Hello header",
                },
              ],
            },
            {
              type: "list",
              children: [
                {
                  type: "paragraph",
                  id: "4567890",
                  children: [
                    {
                      type: "richText",
                      children: [
                        {
                          text: "content here",
                        },
                      ],
                    },
                    {
                        type: 'list',
                        children: []
                    }
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
