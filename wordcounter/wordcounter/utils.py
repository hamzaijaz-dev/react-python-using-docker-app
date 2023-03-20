from collections import Counter


def find_most_frequent_words(validated_data: dict, count: int = 5) -> list:
    """Finds most used words and returns them."""
    file_data = validated_data['file'].read().decode()
    words = file_data.split('\n')
    most_common_words_with_count = Counter(words).most_common(count)
    top_frequent_words = [word for word, count in most_common_words_with_count]

    return top_frequent_words
