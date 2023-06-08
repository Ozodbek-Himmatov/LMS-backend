const fs = require('fs');
const path = require('path');

function makeFiles(folderName: string, name: string, props: object) {
  // ALL FUNCTIONS
  let mkDir = path.resolve(__dirname, '..', folderName);
  let readFromExample = (name: string) => {
    return fs
      .readFileSync(path.resolve(__dirname, 'example', name), 'utf8')
      .toString();
  };
  let replaceName = (content: string) => {
    let splitContent = content.split('\n');
    for (let i in splitContent) {
      if (splitContent[i].includes('from')) {
        splitContent[i] = splitContent[i].replace(
          /example./g,
          folderName + '.',
        );
      }
    }
    content = splitContent.join('\n');
    content = content
      .replace(/@Controller('example')/, `@Controller('${name}')`)
      .replace(/example/g, name[0].toLowerCase() + name.slice(1, name.length))
      .replace(/Example/g, name);
    return content;
  };

  let writeProps = (content: string) => {
    let propsArea: string = '';
    for (let i in props) {
      propsArea += `@Prop(${props[i][1]})\n\t${i}:${props[i][0]};\n\n\t`;
    }

    return content.replace(/'props'/, propsArea);
  };

  let writeCreateDto = (content: string) => {
    let str = '';
    for (let i in props) {
      str += `@ApiProperty({ example: "${props[i][2]}" })\n\t${i}: ${
        props[i][0].length > 10 ? 'number' : props[i][0]
      };\n\n\t`;
    }
    return content.replace(/'dto'/, str);
  };

  let writeUpdateDto = (content: string) => {
    let str = '';
    for (let i in props) {
      str += `@ApiProperty({ example: "${props[i][2]}" })\n\t${i}?: ${
        props[i][0].length > 10 ? 'number' : props[i][0]
      };\n\n\t`;
    }
    return content.replace(/'dto'/, str);
  };

  // FUNCTIONS END

  try {
    fs.mkdirSync(mkDir);
  } catch (error) {
    console.log('Folder is already created.');
  }
  let controller = readFromExample('example.controller.ts');
  let module = readFromExample('example.module.ts');
  let service = readFromExample('example.service.ts');
  let schema = readFromExample('schemas/example.schema.ts');
  let createDtoFile = readFromExample('dto/create-example.dto.ts');
  let updateDtoFile = readFromExample('dto/update-example.dto.ts');

  // CREATE CONTROLLER FILE
  try {
    fs.writeFileSync(
      mkDir + `/${folderName}.controller.ts`,
      replaceName(controller),
    );
    console.log('Controller created');
  } catch (error) {
    console.log('Error while creating Controller');
  }

  // CREATE SERVICE FILE
  try {
    fs.writeFileSync(mkDir + `/${folderName}.service.ts`, replaceName(service));
    console.log('Service created');
  } catch (error) {
    console.log('Error while writing Service');
  }

  // CREATE MODULE FILE
  try {
    fs.writeFileSync(mkDir + `/${folderName}.module.ts`, replaceName(module));
    console.log('Module created');
  } catch (error) {
    console.log('Error while writing Module');
  }

  // CREATE SCHEMA
  try {
    try {
      fs.mkdirSync(mkDir + '/schemas');
      console.log('Schema created');
    } catch (error) {
      console.log('The Schema folder already exists');
    }
    fs.writeFileSync(
      mkDir + `/schemas/${folderName}.schema.ts`,
      writeProps(replaceName(schema)),
    );
    console.log('Schema created');
  } catch (error) {
    console.log('Error while writing Schema');
  }

  // CREATE DTO FOLDER
  try {
    fs.mkdirSync(mkDir + '/dto');
    console.log('Dto created');
  } catch (error) {
    console.log('THe Dto folder already exists');
  }

  // CREATE CREATE DTO FILE
  try {
    fs.writeFileSync(
      mkDir + `/dto/create-${folderName}.dto.ts`,
      writeCreateDto(replaceName(createDtoFile)),
    );
    console.log('CreateDto created');
  } catch (error) {
    console.log('Error while writing CreateDto');
  }

  // CREATE UPDATE DTO FILE
  try {
    fs.writeFileSync(
      mkDir + `/dto/update-${folderName}.dto.ts`,
      writeUpdateDto(replaceName(updateDtoFile)),
    );
    console.log('UpdateDto created');
  } catch (error) {
    console.log('Error while writing UpdateDto');
  }
}

// STUDENTS
makeFiles('students', 'Students', {
  full_name: ['string', '', 'Toshmat'],
  image: ['string', '', 'https://picsum.photos/1001/1000'],
  phone: ['string', '', '887038006'],
  login: ['string', '', '123login'],
  password: ['string', '', '123password'],
  group_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Groups'  }]",
    '',
  ],
  email: ['string', '', 'email@gmail.com'],
  tg_name: ['string', '', '@user'],
  token: ['string', '', ''],
});

// STAFF
makeFiles('staffs', 'Staffs', {
  full_name: ['string', '', 'Toshmat'],
  image: ['string', '', 'https://picsum.photos/1001/1000'],
  phone: ['string', '', '887038006'],
  login: ['string', '', '123login'],
  password: ['string', '', '123password'],
  role_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Role'  }]",
    '',
  ],
  email: ['string', '', 'email@gmail.com'],
  tg_name: ['string', '', '@user'],
  token: ['string', '', ''],
});

// GROUPS
makeFiles('groups', 'Groups', {
  name: ['string', '', 'N7 Bootcamp'],
  description: ['string', '', 'The best class'],
  start_year: ['string', '', '2022'],
});

// GROUP_STAFF
makeFiles('group-staff', 'GroupStaff', {
  staff_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Staffs'  }]",
    '',
  ],
  group_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Groups'  }]",
    '',
  ],
});

// ROLES
makeFiles('roles', 'Roles', {
  name: ['string', '', 'ADMIN'],
});

// TEST_GROUP
makeFiles('test-group', 'TestGroup', {
  subject_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Subjects'  }]",
    '',
  ],
  tests_count: ['number', '', '15'],
  name: ['string', '', '19'],
  test_time: ['string', '', '30'],
});

// SUBJECTS
makeFiles('subjects', 'Subjects', {
  name: ['string', '', 'Matematika'],
});

// SUBJECT_STAFF
makeFiles('subject-staff', 'SubjectStaff', {
  staff_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Staffs'  }]",
    '123',
  ],
  subject_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Subjects'  }]",
    '123',
  ],
});

// TEST_RESULTS
makeFiles('test-results', 'TestResults', {
  student_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Student'  }]",
    '123',
  ],
  test_group_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'TestGroup'  }]",
    '123',
  ],
  correct_count: ['number', '', '12'],
});

// CHECKED_TEST
makeFiles('checked-test', 'CheckedTest', {
  question_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Students'  }]",
    '123',
  ],
  answer_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'TestGroup'  }]",
    '123',
  ],
  student_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'Students'  }]",
    '123',
  ],
});

// QUESTIONS
makeFiles('questions', 'Questions', {
  test_group_id: [
    'mongoose.Schema.Types.ObjectId',
    "[{ type: mongoose.Schema.Types.ObjectId, ref:'TestGroup'  }]",
    '123',
  ],
  question: ['string', '', 'Haftada necha kun bor ?'],
  correct_answers: ['number', '', '1'],
});

// ANSWERS
makeFiles('answers', 'Answers', {
  answer: ['string', '', ''],
  question: ['string', '', '123'],
  correct_answers: ['number', '', '1'],
});
