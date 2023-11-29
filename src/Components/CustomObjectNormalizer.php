<?php

declare(strict_types=1);

namespace WizmoGmbh\IvyPayment\Components;

use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

class CustomObjectNormalizer extends ObjectNormalizer
{
    /**
     * @param $object
     * @param null $format
     * @param array $context
     * @return array
     */
    public function normalize($object, $format = null, array $context = []): array
    {
        $data = parent::normalize($object, $format, $context);

        return \array_filter($data, static function ($value) {
            return null !== $value;
        });
    }
}
