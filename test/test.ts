import test from 'ava';
import {List} from '../linq';

interface Person {
    Name: string;
    Age: number;
}

/**
 * AVA tests
 */

test('Add', t => {
    t.is(new List<string>().Add('hey').First(), 'hey');
});

test('Add range', t => {
    t.is(new List<string>(['hey']).AddRange(['hola', 'que', 'tal']).ToArray().join(), 'hey,hola,que,tal');
});

// test('Aggregate', t => {
//     t.fail();
// })
    
test('All', t => {
    t.true(new List<string>(['hey', 'hola', 'que', 'tal']).All(x => typeof x === 'string'));
});

test('Any', t => {
    t.true(new List<string>(['hey', 'hola', 'que', 'tal']).Any(x => x === 'hola'));
});
    
test('Average', t => {
    t.is(new List<number>([2, 3, 5, 10]).Average(x => x), 5);
});

test('Concat', t => {
    let a = new List<string>(['hey', 'hola', 'que', 'tal']);
    let b = new List<string>(['como', 'estas', '?']);
    t.is(a.Concat(b).ToArray().join(), 'hey,hola,que,tal,como,estas,?');
});

test('Contains', t => {
    t.true(new List<string>(['hey', 'hola', 'que', 'tal']).Contains('hola'));
});

test('Count', t => {
    t.is(new List<string>(['hey', 'hola', 'que', 'tal']).Count(), 4);
});
    
// test('DefaultIfEmpty', t => {
//     t.fail();
// });

// test('Distinct', t => {
//     t.fail();
// });
    
test('ElementAt', t => {
    let a = new List<string>(['hey', 'hola', 'que', 'tal']);
    t.is(a.ElementAt(0), 'hey')
    t.notOk(a.ElementAt(4));
});

test('ElementAtOrDefault', t => {
    let a = new List<string>(['hey', 'hola', 'que', 'tal']);
    t.is(a.ElementAtOrDefault(0), 'hey');
    t.is(a.ElementAtOrDefault(4), 0);
});
    
// test('Except', t => {
//     t.fail();
// });

test('First', t => {
    t.is(new List<string>(['hey', 'hola', 'que', 'tal']).First(), 'hey');
    t.is(new List<number>([1,2,3,4,5]).First(x => x > 2), 3);
    t.notOk(new List<string>().First());
});
   
test('FirstOrDefault', t => {
    t.is(new List<string>(['hey', 'hola', 'que', 'tal']).FirstOrDefault(), 'hey');
    t.is(new List<string>().FirstOrDefault(), 0);
});

// test('ForEach', t => {
//     t.fail();
// });

// test('GroupBy', t => {
//     t.fail();
// });

// test('GroupJoin', t => {
//     t.fail();
// });

// test('Intersect', t => {
//     t.fail();
// });

// test('Join', t => {
//     t.fail();
// });

test('Last', t => {
    t.is(new List<string>(['hey', 'hola', 'que', 'tal']).Last(), 'tal');
    t.is(new List<number>([1,2,3,4,5]).Last(x => x > 2), 5);
    t.notOk(new List<string>().Last());
});

test('LastOrDefault', t => {
    t.is(new List<string>(['hey', 'hola', 'que', 'tal']).LastOrDefault(), 'tal');
    t.is(new List<string>().LastOrDefault(), 0);
});

test('Max', t => {
    t.is(new List<number>([1,2,3,4,5]).Max(), 5);
});

test('Min', t => {
    t.is(new List<number>([1,2,3,4,5]).Min(), 1);
});

test('OrderBy', t => {
    t.is(new List<number>([4,5,6,3,2,1]).OrderBy().ToList().join(), '1,2,3,4,5,6');
});

test('OrderByDescending', t => {
    t.is(new List<number>([4,5,6,3,2,1]).OrderByDescending().ToList().join(), '6,5,4,3,2,1');
});

// test('ThenBy', t => {
//     t.fail();
// });

// test('ThenByDescending', t => {
//     t.fail();
// });

// test('Range', t => {
//     t.fail();
// });

// test('Repeat', t => {
//     t.fail();
// });

test('Reverse', t => {
    t.is(new List<number>([1,2,3,4,5]).Reverse().ToList().join(), '5,4,3,2,1');
});

test('Select', t => {
    t.is(new List<number>([1,2,3]).Select(x => x * 2).ToList().join(), '2,4,6');
})

// test('SelectMany', t => {
//     t.fail();
// });

// test('SequenceEqual', t => {
//     t.fail();
// });

// test('Single', t => {
//     t.fail();
// });

// test('SingleOrDefault', t => {
//     t.fail();
// });

// test('Skip', t => {
//     t.fail();
// });

// test('SkipWhile', t => {
//     t.fail();
// });

test('Sum', t => {    
    let people = new List<Person>([
        {Name: "Alice", Age: 25},
        {Name: "Bob"  , Age: 50},
        {Name: "Cathy", Age: 15}
    ]);    
    // t.is(new List<number>([2,3,5]).Sum(), 10); // TODO: fix this case
    t.is(people.Sum(x => x.Age), 90);
});

// test('Take', t => {
//     t.fail();
// });

// test('TakeWhile', t => {
//     t.fail();
// });

test('ToArray', t => {
    t.is(new List<number>([1,2,3,4,5]).ToArray().join(), '1,2,3,4,5');
});

test('ToDictionary', t => {        
    let people = new List<Person>([
        {Name: "Alice", Age: 25},
        {Name: "Bob"  , Age: 50},
        {Name: "Cathy", Age: 15}
    ]);    
    t.not(people.ToDictionary(x => x.Name, x => x.Age)['Alice'], 25); // TODO
    // t.same(people.ToDictionary(x => x.Name)['Alice'], {Name: "Alice", Age: 25});
});

// test('ToList', t => {
//     t.fail();
// });

// test('Union', t => {
//     t.fail();
// });

test('Where', t => {
    t.is(new List<string>(['hey', 'hola', 'que', 'tal']).Where(x => x.length > 3).Select(x => x + 'a').First(), 'holaa');
});

// test('Zip', t => {
//     t.fail();
// });

test('Chain', t => {
    t.is(new List<number>([1,2,3,4,5]).Where(x => x > 3).Select(y => y * 2).ToList().join(), '8,10');
    t.is(new List<number>([1,2,3,4,5]).Where(x => x > 3).Select(y => y + 'a').ToList().join(), '4a,5a');
});
